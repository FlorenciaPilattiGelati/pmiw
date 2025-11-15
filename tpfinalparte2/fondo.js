class Fondo{
  constructor(Y){
    this.posX=0;
    this.posY=Y;
  }
dibujarFondo(){
 image(fondo,0, this.posY, width, height);
 this.moverFondo();
  }

  moverFondo() {
    if (this.posY > height) {
      this.posY=-478;
    }
    this.posY++;
  }
}
