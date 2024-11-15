let ingredientes;
let jugador;

let juego;

function setup() {

  createCanvas(640, 480);
  jugadorImg = loadImage("data/jugador.jpg");
  //ingredienteImg = loadImage("data/ingrediente_0.jpg");

  juego = new Juego();
}

function draw() {
  background(250);
  juego.actualizar();
}
