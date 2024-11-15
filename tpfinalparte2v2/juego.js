class Juego {
  constructor(cantIngredientes) {
    this.cantIngredientes = cantIngredientes;
    this.mostrarJugador();
    this.crearIngredientes();
  }
}

mostrarJugador() {
  this.objJugador.mostrar();
  image(jugadorImg, this.posX, this.posY);
}

crearIngredientes() {
  this.objIngrediente = [];
  for (let i = 0; i < this.cantIngredientes; i++) {
    this.objIngrediente[i] = new Ingredientes();
  }
}
