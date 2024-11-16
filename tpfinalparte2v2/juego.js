class Juego {
  constructor() {
    this.temporizador = 0;
    this.puntaje = 0;
    //this.boton = new Boton();
    this.jugador = new Jugador(100, 400);
    this.cantIngredientes = 5;

    this.ingredientes = [];


    for (let i =0; i < this.cantIngredientes; i++) {
      this.ingredientes.push(new Ingredientes());
    }
  }

  actualizar() {
    this.jugador.actualizar();
    for (let i = 0; i < this.ingredientes.length; i++) {
      this.ingredientes[i].actualizar();
    }
  }
}
