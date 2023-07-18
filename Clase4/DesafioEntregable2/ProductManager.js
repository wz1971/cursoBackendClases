const fs = require("fs")

class ProductManager {
  currentId = 0

  constructor() {
    this.products = []
    this.prodFile = "Products.json"
    this.initializeFile()
  }

  initializeFile() {
    if (!fs.existsSync(this.prodFile)) {
      fs.writeFileSync(this.prodFile, JSON.stringify(this.products))
    }
  }

  updateProduct(id, product) {}

  deleteProduct(prodId) {
    this.products = JSON.parse(fs.readFileSync(this.prodFile, "utf-8")).filter((item) => item.id !== prodId)
    fs.writeFileSync(this.prodFile, JSON.stringify(this.products))
  }

  getProducts() {
    this.products = JSON.parse(fs.readFileSync(this.prodFile, "utf-8"))
    return this.products
  }

  getProductById(prodId) {
    this.products = JSON.parse(fs.readFileSync(this.prodFile, "utf-8"))
    return this.products.find((product) => product.id === prodId) || console.error("Not found")
  }

  addProduct(product) {
    if (!Object.values(product).every((val) => val)) {
      console.error("Error! All properties must be provided.")
    } else if (this.products.some((prod) => prod.code === product.code)) {
      console.error("Error! Product code already exists.")
    } else {
      this.currentId += 1
      this.products = JSON.parse(fs.readFileSync(this.prodFile, "utf-8"))
      this.products.push({ ...product, id: this.currentId })
      fs.writeFileSync(this.prodFile, JSON.stringify(this.products))
    }
  }
}

module.exports = ProductManager
