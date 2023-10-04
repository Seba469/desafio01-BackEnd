class ProductManager{
    constructor(){
        this.products = [];
    }

    getProducts() {
        return this.products
    }

    addProducts(title, description, price, thumbnail, code, stock){
        if(!title, !description, !price, !thumbnail, !code, !stock){
            console.log("Debe completar todos los campos")
            return;
        }

        const newProduct = {
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        };

        const index = this.products.findIndex(p => p.code === code )

        if (index != -1){
            console.log("Codigo repetido")
            return;
        }
        
        this.products.push(newProduct)
        console.log("Producto agregado")
        return;
        
    }

    getProductsById(id){
        const productoFiltrado = this.products.filter(p => p.id === id)

        if (productoFiltrado.length === 0){
            console.log("Not found")
            return
        }else{
            return productoFiltrado
        }  
    }
}

const productManager = new ProductManager();

console.log("getProducts", productManager.getProducts())
console.log("==================================================================")
productManager.addProducts("pantalon", "pantalon negro", 120, "pantalonNegro.jpg", "cod1", 30)
productManager.addProducts("remera", "remera roja", 120, "remeraRoja.jpg", "cod2", 30)
console.log("==================================================================")
console.log("getProducts", productManager.getProducts())
console.log("==================================================================")
console.log("getProductsById", productManager.getProductsById(1))