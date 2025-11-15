class Tiempo{
constructor(){
  this.tiempo=20;
}
dibujartiempo(){
  textSize(30);
fill(255);
  text("tiempo:"+this.tiempo, 200, 50);  
}
bajar(){
    if (frameCount % 60===0) { 
    this.tiempo --;
  }
}
}
