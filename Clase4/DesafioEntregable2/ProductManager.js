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
      this.writeFile(this.products)
    }
  }

  writeFile(prodlist) {
    fs.writeFileSync(this.prodFile, JSON.stringify(prodlist))
  }

  readFile() {
    return JSON.parse(fs.readFileSync(this.prodFile, "utf-8"))
  }

  updateProduct(prodId, newprod) {
    this.prodlist = this.readFile()
    let idx = this.prodlist.findIndex((item) => item.id === prodId)
    if (idx >= 0) {
      this.prodlist[idx].title = newprod.title
      this.prodlist[idx].description = newprod.description
      this.prodlist[idx].price = newprod.price
      this.prodlist[idx].thumbnail = newprod.thumbnail
      this.prodlist[idx].code = newprod.code
      this.prodlist[idx].stock = newprod.stock
      console.log("Updating product list...\n")
      this.writeFile(this.prodlist)
      console.log("Done.\n")
    } else {
      console.log("Product Id not found.\n")
    }
  }

  deleteProduct(prodId) {
    this.products = this.readFile().filter((item) => item.id !== prodId)
    this.writeFile(this.products)
  }

  getProducts() {
    this.products = this.readFile()
    return this.products
  }

  getProductById(prodId) {
    this.products = this.readFile()
    return this.products.find((product) => product.id === prodId) || console.error("Not found.\n")
  }

  addProduct(product) {
    if (!Object.values(product).every((val) => val)) {
      console.error("Error! All properties must be provided.\n")
    } else if (this.products.some((prod) => prod.code === product.code)) {
      console.error("Error! Product code already exists.\n")
    } else {
      this.currentId += 1
      this.products = this.readFile()
      this.products.push({ ...product, id: this.currentId })
      this.writeFile(this.products)
    }
  }
}

module.exports = ProductManager
