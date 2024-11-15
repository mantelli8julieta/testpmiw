class Ingredientes {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;

    this.tipoIng = int(random(0, 2));
  }
}

//métodos

mostrarIngredientes(){
image(ingredienteImg, );
}

actualizarIngredientes() {
}

moverIngredientes() {
  this.x = random(width);
  this.y = height+random(200, 1000);
}
