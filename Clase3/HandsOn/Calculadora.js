const suma = (val1, val2) => {
  return new Promise((resolve, reject) => {
    if (val1 == 0 || val2 == 0) {
      reject("Operación innecesaria!")
    } else {
      let resultado = val1 + val2
      resultado < 0 ? reject("Sólo se pueden devolver valores positivos") : resolve("Resultado = " + resultado)
    }
  })
}
