class Contador {
  static contadorGlobal = 0

  constructor(nombre) {
    this.nombreResponsable = nombre
    this.contadorLocal = 0
  }

  getResponsable() {
    return this.nombreResponsable
  }

  contar(numero) {
    Contador.contadorGlobal++
    this.contadorLocal += numero
  }
}

const contador1 = new Contador("Juan")
const contador2 = new Contador("Pedro")
const contador3 = new Contador("Jose")

contador1.contar(10)
console.log("El responsable del Contador1 es: " + contador1.getResponsable())
console.log("El valor del Contador local es: " + contador1.contadorLocal)
console.log("El valor del Contador global es: " + Contador.contadorGlobal)
console.log("\n\n")

contador2.contar(5)
console.log("El responsable del Contador2 es: " + contador2.getResponsable())
console.log("El valor del Contador local es: " + contador2.contadorLocal)
console.log("El valor del Contador global es: " + Contador.contadorGlobal)
console.log("\n\n")

contador3.contar(23)
console.log("El responsable del Contador3 es: " + contador3.getResponsable())
console.log("El valor del Contador local es: " + contador3.contadorLocal)
console.log("El valor del Contador global es: " + Contador.contadorGlobal)
