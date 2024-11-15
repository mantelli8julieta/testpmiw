class Jugador {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.vel = 5;
  }

  actualizar() {
    this.mostrar();
    this.mover();
  }

  mostrar() {
    image(jugadorImg, this.posX, this.posY, 80, 80);
    
  }
  
    mover(){
      this.posX = mouseX;
    }
}
