class Simms{
  constructor(x,y,ta){
    this.posx=x;
    this.posy=y;
    this.tam=ta;
  }
dibujarSimms(){
  fill(255,0,0);
  image(imgmalo, this.posx, this.posy, this.tam, this.tam);
}

moverSimms(){
  
      if (this.posy>height) {
      this.posy=0;
    this.posx = random(0, width - this.tam); 

    }
   this.posy+=3;
  }
}
