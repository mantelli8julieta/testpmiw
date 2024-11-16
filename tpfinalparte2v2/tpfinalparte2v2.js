let jugador;
let imgIngredientes = [];
let juego;

function setup() {

  createCanvas(640, 480);
  jugadorImg = loadImage("data/jugador.jpg");

  for (let i = 0; i < 3; i++) {
    imgIngredientes[i] = loadImage("data/ingrediente_"+i+".png");
  }
  //ingredienteImg = loadImage("data/ingrediente_0.jpg");

  juego = new Juego();
}

function draw() {
  background(250);
  juego.actualizar();
}
