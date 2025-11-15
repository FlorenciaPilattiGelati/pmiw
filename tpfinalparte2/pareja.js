class Pareja{
constructor(anch){
  this.pox=320;
    this.poy=400;
    this.tamo=anch;
}
dibujarPareja(){
  fill(0, 0, 255);
   image(imgpareja, this.pox, this.poy, this.tamo, this.tamo);
  
}
caminar(){
if (this.pox>width) {
      this.pox=-this.tamo;
    }
}
  moverPareja() {
    if (keyCode===LEFT_ARROW) {
      this.pox--;
    }

    if (keyCode===RIGHT_ARROW) {
      this.pox++;
    }
  }

}
