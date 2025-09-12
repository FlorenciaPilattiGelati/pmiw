/*florencia pilatti gelati
comision 1
https://youtu.be/PI8oQ9DQNDQ
*/
let img;
let ancho, alto, tamaño, casillas, clicks;
let azul;
let celeste;
let mover;

function preload() { 
  img =loadImage('data/25.jpg');
}
function setup() {
  createCanvas(800, 400);
  ancho = 400;
  alto = 0;
  tamaño = 100;
  casillas = ancho / 4;
  azul = color(79, 104, 170);
  celeste = color(220, 227, 245);
  clicks = 0;
  mover = false;
}


function draw() {
  background(255);
  image(img, 0, 0, 400, 400);

  grilla(ancho, alto, tamaño, casillas);
}

function grilla( x, y, tam, cas) {
  for (let i = 0; i < cas; i++) {
    for (let j = 0; j < cas; j++) {
      if (parimp(i, j)) {
        forma(x + j * tam, y + i * tam, tam);
      } else {
        forma2(x + j * tam, y + i * tam, tam);
      }
    }
  }
}

function parimp(n1, n2) {
  return (n1 + n2) % 2 == 0;
}

function mousePressed() {
  clicks++;

  if (clicks <= 5) {
    azul = color(random(255), random(255), random(255));
    celeste = color(255);
    mover= true;
  } else {
    clicks = 0;
    azul = color(79, 104, 170);
    celeste = color(220, 227, 245);
    volver();
  }
}

function forma( anch, alt, tmñ) {
  fill(celeste);
  rect(anch, alt, tmñ, tmñ);

  fill(azul);
  ellipse(anch + tmñ/2, alt + tmñ/2, tmñ, tmñ);

  let centx = anch + tmñ/2;
  let centy = alt + tmñ/1.35;
  let finx = centx;
  let finy = centy;

  if (mover) {
    let dx = mouseX - centx;
    let dy = mouseY - centy;
    let d = dist(centx, centy, mouseX, mouseY);

    let distm = (tmñ/2) - (tmñ/4);

    if (d < distm) {
      finx= mouseX;
      finy= mouseY
    } else {
      let escala = distm / d;
      finx = centx + dx * escala;
      finy = centy + dy * escala;
    }
  }
  fill(celeste);
  ellipse(finx, finy, tmñ / 2, tmñ / 2);
}

function forma2( an, al, tama) {
  noStroke();
  fill(azul);
  rect(an, al, tama, tama);

  fill(celeste);
  ellipse(an + tama/2, al + tama/2, tama, tama);

  let centrox = an + tama/2;
  let centroy = al + tama/1.35;

  let finalx = centrox;
  let finaly = centroy;

  if (mover) {
    let mx = mouseX - centrox;
    let my = mouseY - centroy;
    let distan = dist(centrox, centroy, mouseX, mouseY);

    let dmax = (tama/2) - (tama/4);

    if (distan < dmax) {
      finalx = mouseX;
      finaly = mouseY;
    } else {
      let esca = dmax / distan;
      finalx= centrox + mx * esca;
      finaly= centroy + my * esca;
    }
  }
  fill(azul);
  ellipse(finalx, finaly, tama/2, tama/2);
}
function volver() {
  setup();
}
