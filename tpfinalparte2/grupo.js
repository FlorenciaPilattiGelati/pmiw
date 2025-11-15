class Grupo{
  constructor(px,py,tamaño){
    this.p1=px;
    this.p2=py;
    this.tamo=tamaño
    this.activo=true;
  }
dibujarGrupo(){
  if(this.activo==true){
  fill(0,255,0);
  image(imggrupo, this.p1, this.p2, this.tamo, this.tamo);
}
}
moverGrupo(){

      if (this.p2>height) {
      this.p2=0;
     this.p1 = random(0, width - this.tamo); 
   this.activo=true;
    }
        this.p2+=3;
  }
grupono() {
    this.activo=false;
    puntosonido.play();
  }


}
