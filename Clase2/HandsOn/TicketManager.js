class TicketManager {
  constructor() {
    this.eventos = []
  }

  static precioBaseDeGanancia = 2500

  getEventos() {
    return this.eventos
  }

  agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
    const evento = {
      id: this.getEvId(),
      nombre: nombre,
      lugar: lugar,
      precio: precio + precio * 0.15,
      capacidad: capacidad,
      fecha: fecha,
      participantes: [],
    }
    this.eventos.push(evento)
  }

  agregarUsuario(idEvento, idUsuario) {
    let index = this.eventos.findIndex((evt) => evt.id === idEvento)
    if (index > -1) {
      if (this.eventos[index].participantes.includes(idUsuario)) {
        console.error("Error! Usuario existente")
      } else {
        this.eventos[index].participantes.push(idUsuario)
      }
    } else {
      console.error("Error! Evento inexistente")
    }
  }

  ponerEventoEnGira(idEvento, nuevoLugar, nuevaFecha) {
    let index = this.eventos.findIndex((evt) => idEvento === evt.id)
    const evento = this.eventos[index]
    const nuevoEvento = { ...evento, id: this.getEvId(), lugar: nuevoLugar, fecha: nuevaFecha, participantes: [] }
    this.eventos.push(nuevoEvento)
  }

  getEvId() {
    let max = 0

    this.eventos.forEach((evt) => {
      max = evt.id > max && evt.id
    })
    return max + 1
  }
}

const TM = new TicketManager()
TM.agregarEvento("Sodom", "Teatro Flores", 20000, 2500)
TM.agregarEvento("Alcest", "Uniclub", 8000, 1500)
TM.agregarEvento("Mastodon + Gojira", "Movistar Arena", 25000, 4000)
TM.agregarUsuario(1, 100)
TM.agregarUsuario(1, 100)
TM.agregarUsuario(2, 100)
TM.agregarUsuario(2, 200)
TM.agregarUsuario(3, 300)

console.log(TM.getEventos())

TM.agregarUsuario(7, 700)
TM.ponerEventoEnGira(1, "Teatro Gran Rivadavia", "2023-10-23")

console.log(TM.getEventos())
