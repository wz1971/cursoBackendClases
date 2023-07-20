const ProductManager = require("./ProductManager.js")

//Instanciar objeto
const PM = new ProductManager()

//Verificar lista de productos vacía
console.log("Product List: " + JSON.stringify(PM.getProducts()) + "\n")

//Agregar productos
console.log("Adding products...\n")
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

//Verificar lista
console.log("Product List: " + JSON.stringify(PM.getProducts()) + "\n")

//Verificar no inserción de código repetido
PM.addProduct({
  title: "producto prueba3",
  description: "Este es un producto prueba más",
  price: 300,
  thumbnail: "Sin imagen",
  code: "abc123",
  stock: 25,
})

//Listar producto por Id
console.log("Producto encontrado: " + JSON.stringify(PM.getProductById(2)) + "\n")

//Listar producto por Id inexistente
PM.getProductById(5)

//Actualizar producto existente
PM.updateProduct(1, {
  title: "Nuevo Producto de Prueba 1",
  description: "Este producto ha sido modificado",
  price: 1000,
  thumbnail: "./image.jpg",
  code: "FGH789",
  stock: 150,
})

//Listar producto actualizado
PM.getProductById(1)

//Actualizar producto inexistente
PM.updateProduct(10, {
  title: "Nuevo Producto de Prueba 1",
  description: "Este producto ha sido modificado",
  price: 1000,
  thumbnail: "./image.jpg",
  code: "FGH789",
  stock: 150,
})

//Listado resultante
console.log("This is the current product list:\n" + JSON.stringify(PM.getProducts()))
