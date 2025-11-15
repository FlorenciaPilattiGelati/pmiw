//Lara Bordon y Florencia Pilatti Gelati
//comision 1
//https://youtu.be/qL-sxPu8AQY
let empezar
let imgpareja
let puntosonido
let imgmalo
let imggrupo
let fondo

function preload() {
  imgpareja=loadImage('data/imgpareja.jpg');
  puntosonido=loadSound('data/punto.mp3');
  imgmalo=loadImage('data/malo.jpg');
  imggrupo=loadImage('data/imggrupo.jpg');
  fondo=loadImage('data/fondodes.png');
}

function setup() {
createCanvas(640,480)
empezar=new Juego(4,50);

}
function draw() {
  background(0);
  empezar.dibujar();
  empezar.estados();
}
function mouseClicked() {
   empezar.pantallasgp();} 
