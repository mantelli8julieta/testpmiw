let jugadorImg;
let ingredienteImg;


let objJuego;
let objJugador;
let objIngrediente;
let ingredientes = [];
let cantIngredientes = 6;

function setup() {
   
  createCanvas(640, 480);
  jugadorImg = loadImage("data/jugador.jpg");
  ingredienteImg = loadImage("data/ingrediente_0.jpg");
 

  objJuego = new Juego();

  for (let i = 0; i < cantIngredientes; i++) {
     objIngrediente[i] = new Ingredientes(); 
  }
}


function draw() {
  background(250);
  objJuego.mostrar();
}
