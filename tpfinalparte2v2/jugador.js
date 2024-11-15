class Jugador {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
  }
}

mostrar() {
  image(jugadorImg, this.posX, this.posY, 40, 40);
}
