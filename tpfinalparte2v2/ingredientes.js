class Ingredientes {
  constructor() {
    this.posX = random(width);
    this.posY = random(-300, -900);
    this.velCaida = 3;
    this.tipo = int(random(0, 3));
    //carga según tipo d ingrediente
    // this.imgIngredientes = loadImage("data/ingrediente_"+this.tipo+".jpg");
    this.imgIngredientes = loadImage("data/ingrediente_0.jpg");
  }

  actualizar() {
    this.mostrar();
    this.generar();
    this.caer();
    this.reiniciarUbi();
  }

  mostrar() {
    push();
    translate(this.posX, this.posY);
    image(this.imgIngredientes, 0, 0, 50, 50);
    pop();
  }

  generar() {
    for (let i = 0; i < this.cantIngredientes; i++) {
      this.ingredientes[i].mostrar();
    }
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
}
