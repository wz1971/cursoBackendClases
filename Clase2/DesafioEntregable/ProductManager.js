class ProductManager {
  currentId = 0

  constructor() {
    this.products = []
  }

  getProducts() {
    return this.products
  }

  getProductById(prodId) {
    return this.products.find((product) => product.id === prodId) || console.error("Not found")
  }

  addProduct(product) {
    if (!Object.values(product).every((val) => val)) {
      console.error("Error! All properties must be provided.")
    } else if (this.products.some((prod) => prod.code === product.code)) {
      console.error("Error! Product code already exists.")
    } else {
      this.currentId += 1
      this.products.push({ ...product, id: this.currentId })
    }
  }
}

const PM = new ProductManager()
console.log("Product List: " + JSON.stringify(PM.getProducts()))
console.log("Adding product")
PM.addProduct({
  title: "producto prueba",
  description: "Este es un producto prueba",
  price: 200,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
})
PM.addProduct({
  title: "producto prueba 2",
  description: "Este es otro producto prueba",
  price: 100,
  thumbnail: "Sin imagen",
  code: "def456",
  stock: 50,
})
console.log("Product List: " + JSON.stringify(PM.getProducts()))

PM.addProduct({
  title: "producto prueba3",
  description: "Este es un producto prueba más",
  price: 300,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
})

PM.getProductById(5)

console.log("Producto encontrado: " + JSON.stringify(PM.getProductById(2)))
