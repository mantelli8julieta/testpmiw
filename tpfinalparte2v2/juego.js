class Juego {
  constructor() {
    this.temporizador = 0;
    this.puntaje = 0;
    //this.boton = new Boton();

    this.jugador = new Jugador(100, 400);
    this.ingredientes = [];
    this.cantIngredientes = 3;

    for (let i =0; i < this.cantIngredientes; i++) {
      this.ingredientes[i] = new Ingredientes();
    }
  }

  actualizar() {
    this.jugador.actualizar();
    for (let i = 0; i < this.ingredientes.length; i++) {
      this.ingredientes[i].actualizar();
    }
  }
}
