class ProductManager {
  constructor() {
    this.products = []
  }

  getProducts() {
    return this.products
  }

  getProductById(prodId) {
    return this.products.find((product) => product.id === prodId) || console.error("Not found")
  }

  getProdId() {
    let max = 0

    this.products.forEach((product) => {
      max = product.id > max && product.id
    })
    return max + 1
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    let product = {
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
    }
    if (!Object.values(product).every((val) => val)) {
      console.error("Error! All properties must be provided.")
    } else if (this.products.some((prod) => prod.code === product.code)) {
      console.error("Error! Product code already exists.")
    } else {
      product = { ...product, id: this.getProdId() }
      this.products.push(product)
    }
  }
}

const PM = new ProductManager()
console.log("Product List: " + JSON.stringify(PM.getProducts()))
console.log("Adding product")
PM.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25)
PM.addProduct("producto prueba 2", "Este es otro producto prueba", 100, "Sin imagen", "def456", 50)
console.log("Product List: " + JSON.stringify(PM.getProducts()))

PM.addProduct("producto prueba3", "Este es un producto prueba más", 300, "Sin imagen", "abc123", 25)

PM.getProductById(5)

console.log("Producto encontrado: " + JSON.stringify(PM.getProductById(2)))
