class ProductManager{
    constructor(){
        this.products = [];
    }

    getProducts() {
        return this.products
    }

    addProducts(title, description, price, thumbnail, stock){
        if(!title, !description, !price, !thumbnail, !stock){
            console.log("Debe completar todos los campos")
            return;
        }

        const newProduct = {
            code: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            stock,
        };

        this.products.push(newProduct)
        console.log("Producto agregado")
        return;
    }

    getProductsById(code){
        const productoFiltrado = this.products.filter(p => p.code === code)

        if (productoFiltrado.length === 0){
            console.log("Not found")
            return
        }else{
            console.log(productoFiltrado)
            return 
        }  
    }
}

const productManager = new ProductManager();

console.log("getProducts", productManager.getProducts())
console.log("==================================================================")
productManager.addProducts("pantalon", "pantalon negro", 120, "pantalonNegro.jpg", 30)
productManager.addProducts("remera", "remera roja", 120, "remeraRoja.jpg", 30)
console.log("==================================================================")
console.log("getProducts", productManager.getProducts())
console.log("==================================================================")
console.log("getProductsById", productManager.getProductsById(5))