const ProductManager = require("./ProductManager.js")

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
