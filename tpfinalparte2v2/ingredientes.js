class Ingredientes {
  constructor() {
    this.posX = random(width);
    this.posY = random(-300, -900);
    this.velCaida = 3;
    this.tipo = int(random(0, 3));
    this.valor = 3;

    this.imgIngredientes = imgIngredientes[this.tipo];


    this.actualizar();
    //ciclo for para carga de imágenes
  }

  actualizar() {
    this.mostrar();
    this.caer();
    this.reiniciarUbi();
   this.colisionJugador();
  }

  mostrar() {
    push();
    translate(this.posX, this.posY);
    image(this.imgIngredientes, 0, 0, 50, 50);
    pop();
  }

  caer() {
    this.posY += this.velCaida;
  }

  reiniciarUbi() {
    if (this.posY > height) {
      this.posX = random(width);
      this.posY = random(-300, -900);
    }
  }

  colisionJugador(xJugador, yJugador, tamImg) {
    if (dist(this.posX, this.posY, xJugador, yJugador) < this.tamImg / 2 + 25) {
      this.reiniciarUbi();
      juego.puntaje += 1;
    }
  }
}
