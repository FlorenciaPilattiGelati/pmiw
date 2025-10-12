//florencia pilatti gelati y lara bordon
//comision1
//https://youtu.be/BmWFfCvkDBM
let imagenes=[];
let texto=[];
let click=0;
let fondo;
let boton=false;
let xtotal, ytotal, ancho, alto, tamaño, tamb;

function preload() {
  fondo = loadSound('data/fondo.mp3');

  for (let i=0; i<25; i++) {
    imagenes[i]=loadImage('data/escena'+i+'.jpg');
  }
}

function setup() {
  createCanvas(640, 480);
  xtotal=640;
  ytotal=480;
  ancho=110;
  alto =420;
  tamaño=200;
  tamb=50;
  fondo.setVolume(0.5);
  fondo.loop();
  textAlign(CENTER, CENTER);
  textSize(22);
  texto[0]='el zorro y el bosque \n de ray bradbury';
  texto[1]='Ann y Roger kristen disfrutan de unas vacaciones en el México de 1938 bajo el nombre de susan y william travis'; 
  texto[2]='Llegaron gracias a una agencia de viajes en el tiempo, huyendo desde 2155 para escapar de la guerra y la conscripción';   
  texto[3]='Pronto notan que un hombre los sigue con insistencia';  
  texto[4]='Seria demaciado sospechoso, pero lo intentan igualmente, pero son interceptados y acorralados por el caballero Quien se hace llamar señor simms'; 
  texto[5]='El señor simms intenta sacarles informacion, probar que son los fugitivos, revelandose como policia del tiempo y les advierte que no existe salida, solo retrasar lo inevitable. ann y roger vuelven a su cuarto, intentando pensar un plan';
  texto[6]='Se mezclan con los turistas y locales, intentando parecer una pareja común ingresando a un cafe y el hombre decide hablarles, se hace llamar sr.simms'; 
  texto[7]='El sr.simms anuncia que sabe su secreto, sin importar cuanto mientan, asi que, en su lugar de descanso, deciden evitarlo lo mas posible y jamas estar solos';
  texto[8]='al dia siguiente una compañia de peliculas norteamericana aparece a filmar, ann y roger van a verlos para mezclarse con la multitud, ann se ve tentada a revelar que es del año 2155 para buscar ayuda, pero tiene una barrera psicologica instaurada por la agencia de viajes que se lo impide';
  texto[9]='ann grita por ayuda, atrae la atencion de todos, y explica a los gritos lo que ocurre. Roger la hace callar, pero por algun extraño motivo el señor simms, la compañia de cine, roger y incluso ella comenzaron a desvanecerse';
  texto[10]='Habian cambiado el futuro, lo cambiaron todo';
  texto[11]='sorpresivamente, en el hotel, el equipo de produccion de la pelicula invita a la pareja a sumarse con ellos al desayuno pero para su desgracia, el señor simms finge ser su amigo y se une a ellos';
  texto[12]='El señor simms les repite que no existe escapatoria, siempre van a venir mas policias del tiempo, van a buscarlos sea como sea. Si lo matan, van a venir otros, hasta que al menos roger vuelva ya que el es vital para la produccion de una bomba para la guerra';
  texto[13]='Ann y roger se alejan y tienen una ultima idea, roger ira con el señor simms y le hara creer que van a encontrarse,  mientras el señor simms espera, roger buscara a ann en su hotel y ambos huiran a un nuevo destino'; 
  texto[14]='Roger ofrece un trato, el ira con el sr simms, pero ann se poodra quedar lejos de la guerra. El sr simms lo esperara en 10 minutos y se iran a un lugar privado para hacer el viaje ';
  texto[15]='mas tarde susan esperaba desde el balcon del hotel la plaza, pero ocurre algo inesperado';
  texto[16]='el auto de roger se acerca peligrosamente por una calle empinada al sr simms';
  texto[17]='ann intenta hacer que roger pare, pero el auto es mas veloz y mata al señor simms en el acto'; 
  texto[18]='en la tarde ambos son citados a declarar al tribunal, pero por fortuna, fueron veloces y lograron hacer creer a todos que fue un accidente';
  texto[19]='"William!" Grito susan, pero el auto atropello al señor simms, matandolo y llamando la atencion de todos. Roger es citado pero logra convencer a todos de que fue un accidente';
  texto[20]='Mientras esperan que su auto sea reparado son invitados nuevamente a pasar el tiempo con la produccion de cine';
  texto[21]='durante el tiempo alli, el sr melton, el director, sugiere a la pareja trabajar en una pelicula, una pelicula que trata exactamente de sus vidas y su ultima aventura. El equipo de grabacion estaba con el sr simms, eran policias del tiempo';
  texto[22]='ann y roger son obligados a regresar, desapareciendo de la habitacion dejando al gerente, a un cura y a un pueblo muy confundidos hasta, posiblemente, la eternidad'; 
  texto[23]='ann y roger logran escapar a tiempo, el equipo de grabacion eran policias del tiempo encubiertos todo este tiempo. Ahora pueden vivir sus vidas alegremente y en paz';
  texto[24]='Florencia Pilatti Gelati \n Lara Bordon';
}

function draw() {
  image(imagenes[click], 0, 0, xtotal, ytotal);

  if(click == 0){
    textSize(50)
  }else if(click == 8){
   fill(0, 255, 0, 60);
   rect(20, 300, 600, 120, 50);
  }
  else{
   fill(0, 255, 0, 60);
   rect(20, 300, 600, 110, 50);
  }
  if(click == 24)
    fill(0);
    else
  fill(255);
  text(texto[click], 40, 300, 560, 120);
  textSize(20)
  if (click === 0) {
    boton = true;
    boto1(ancho, alto, tamaño, tamb, 'Comenzar');
    boto2(ancho * 3, alto, tamaño, tamb, 'Créditos');
  } 
  else if (click === 3) {
    boton = true;
    boto1(ancho, alto, tamaño, tamb, 'intentar huir');
    boto2(ancho * 3, alto, tamaño, tamb,'actuar natural');
  } 
  else if (click === 8) {
    boton = true;
    boto1(ancho, alto, tamaño, tamb, 'vencer la barrrera');
    boto2(ancho * 3, alto, tamaño, tamb,'quedarse callada');
  } 
  else if (click===10) {
    boton = true;
    boto1(ancho, alto, tamaño, tamb, 'regresar al inicio');
    boto2(ancho * 3, alto, tamaño, tamb,'volver atras');
  }   
  else if (click===12) {
    boton = true;
    boto1(ancho, alto, tamaño, tamb, 'ofrecer un trato');
    boto2(ancho * 3, alto, tamaño, tamb,'intentar un ultimo escape');
  }
  else if (click===16) {
    boton = true;
    boto1(ancho, alto, tamaño, tamb, 'tratar de intervenir');
    boto2(ancho * 3, alto, tamaño, tamb,'tratar de gritar por roger');
  }
  else if (click===20) {
    boton = true;
    boto1(ancho, alto, tamaño, tamb,'rechazar');
    boto2(ancho * 3, alto, tamaño, tamb,'aceptar');
  }
  else if (click===22) {
    boton = true;
    boto3(ancho*2, alto, tamaño, tamb, 'regresar al inicio');
  }   
  else if (click===23) {
    boton = true;
    boto3(ancho*2, alto, tamaño, tamb, 'regresar al inicio');
  }
}

function mousePressed() {
    if (click===5) {
       click=8;
        return;
  }if (click===13) {
      click=15;
      return;
  }if (click===18) {
    click=20;
    return;
  }
  
  if (click===0) {
    if (press(ancho, alto, tamaño, tamb)) {
      click=1; 
      return; }
    if (press(ancho*3, alto, tamaño, tamb)) {
      click=24; 
     return; 
}
  }
  if (click===3) {
    if (press(ancho, alto, tamaño, tamb)) { 
      click=4;
      return;
  }
    if (press(ancho*3, alto, tamaño, tamb)) { 
      click=6;
      return; 
}
  }
  if (click===8) {
    if (press(ancho, alto, tamaño, tamb)) { 
      click=9; 
      return; 
  }
    if (press(ancho*3, alto, tamaño, tamb)) { 
      click=11;
      return;
  }
  }
  if (click===10) {
    if (press(ancho, alto, tamaño, tamb)) { 
      click=1; 
     return; 
}
    if (press(ancho*3, alto, tamaño, tamb)) {
      click=8; 
  return; 
}
  }
  if (click===12) {
    if (press(ancho, alto, tamaño, tamb)) {
    click=14; 
    return; }
    if (press(ancho*3, alto, tamaño, tamb)) { 
      click=13;
     return; }
  }
  if (click===16) {
    if (press(ancho, alto, tamaño, tamb)) { 
    click=17; 
    return;
  }
    if (press(ancho*3, alto, tamaño, tamb)){
    click=19; 
    return; 

}
  }
  if (click===20) {
    if (press(ancho, alto, tamaño, tamb)) { 
      click=23; 
      return;
}
    if (press(ancho*3, alto, tamaño, tamb)) {
      click=21; 
     return; 
}
  }
  if (click===22 || click===23) {
    if (press(ancho*2, alto, tamaño, tamb)) { 
    
    click=0; 
   return;
}
  }

  if (!boton) {
    if (click < imagenes.length-1) click++;
    else click = 0;
  }

  boton = false;
}

function boto1(px, py, ta, tb, textob) {
  fill(255, 0, 0,80);
  rect(px, py, ta, tb);
  fill(255);
  text(textob, px + ta/2, py + tb/2);
}

function boto2(x, y, t1, t2, dec) {
  fill(255, 0, 0,80);
  rect(x, y, t1, t2);
  fill(255);
  text(dec, x + t1/2, y + t2/2);
}

function boto3(pos1, pos2, ta, tab, tex) {
  fill(255, 0, 0,80);
  rect(pos1, pos2, ta, tab);
  fill(255);
  text(tex, pos1 + ta/2, pos2 + tab/2);
}

function press(posx, posy, taman, tamal) {
  return mouseX>posx && mouseX<posx+taman && mouseY>posy && mouseY<posy+tamal;
}
