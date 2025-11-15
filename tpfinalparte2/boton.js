class Boton {
  constructor(posicionx, posiciony, to, to2) {
    this.pa = posicionx;
    this.pb = posiciony;
    this.t = to2;
    this.t2 = to;
    this.press = false;
  }

  dibujarboton(texto) {
    fill(150);
    rect(this.pa, this.pb, this.t, this.t2);
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(texto, this.pa + this.t/2, this.pb + this.t2/2);
  }
   
  pressed() {
    return (mouseX > this.pa && mouseX < this.pa + this.t && mouseY > this.pb && mouseY < this.pb + this.t2);
  }
}
