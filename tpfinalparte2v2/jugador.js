class Jugador {
  constructor(xJugador, posY) {
    this.posX = xJugador;
    this.posY = posY;
    this.vel = 5;
    this.tamImg = 80;
  }

  actualizar() {
    this.mostrar();
    this.mover();
  }

  mostrar() {
    image(jugadorImg, this.posX, this.posY, this.tamImg, this.tamImg);
    
  }
  
    mover(){
      this.posX = constrain(mouseX, 0, 480);
    }
}
