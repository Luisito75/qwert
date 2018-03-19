var x, y;
var dir='D',asc='B';
var tam=25;
var vel=10,veladd=0;
var puntos=0;
var ltam=100;
var cst=0;
var vida=3;
var juego =0;
var tiempo=0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  x=250;
  y=windowHeight-200;
}

function draw() {
  Pong();
}
function Pong(){
control();
if(juego==0){
background(0,0,0);
bola();
barra();
moviBolaX();
moviBolaY();
puntuacion();
colision();
difil();
decoracion();
}
if(juego==1){
fill(255,255,0);
stroke(0,0,255);
text("pausa",windowWidth/2,windowHeight/2);
}
if(juego==2){
background(0,0,255);
gover();
}

function bola(){
  fill(255,0,255);
  stroke(0);
  ellipse(x,y,tam,tam);
}
function moviBolaX(){
  if(dir=='D'){
    x+=vel+veladd;
  }
  if(dir == 'I'){
    x-=vel+veladd;
  }
  if(cst==1){
  if(x>=windowWidth-200-tam/2){
    dir='I';
  }
}
  if(x<=200+tam/2){
    dir='D';
  }
}
function moviBolaY(){
  if(asc=='B'){
    y+=vel/2;
  }
  if(asc=='A'){
    y-=vel/2;
  }
  if(y<=0+tam/2){
    asc='B';
  }
  if(y>=windowHeight-tam/2){
    asc='A';
  }
}
function puntuacion(){
  fill(0,255,0);
  stroke(0);
  if(x<=200+tam/2){
    puntos+=1;
  }
  textSize(25);
  text("Puntos "+puntos+(vel+int(veladd)),20,100);
}
function barra(){
  stroke(255);
  strokeWeight(5);
  line(windowWidth-200,mouseY,windowWidth-200,mouseY+ltam);
  strokeWeight(1);
}
function colision(){
  if(!(x>windowWidth-200)){
  if((y>=mouseY-tam/2)&&(y<=mouseY+ltam+tam/2)){
    cst=1;
  }else{
    cst=0;
  }
}
if(x>windowWidth+tam/2){
  x=250;
  vida-=1;
}
}
function difil(){
  if(puntos>=4){
    veladd=2;
    ltam=86;
  }
  if(puntos>=8){
    veladd=4;
    ltam=68;
  }
  if(puntos>=12){
    veladd=puntos/2;
    ltam=50;
  }
  vidas();
}
function vidas(){
  fill(255,0,0);
  text("vidas",70,180);
  if(vida==3){
    fill(255);
    ellipse(80,200,10,10);
    ellipse(100,200,10,10);
    ellipse(120,200,10,10);
  }
  if(vida==2){
    fill(255);
    ellipse(80,200,10,10);
    ellipse(100,200,10,10);
    fill(255,0,0);
    ellipse(120,200,10,10);
  }
  if(vida==1){
    fill(255);
    ellipse(80,200,10,10);
    fill(255,0,0);
    ellipse(100,200,10,10);
    ellipse(120,200,10,10);
  }
  if(vida<=0){
    fill(255,0,0);
    ellipse(80,200,10,10);
    ellipse(100,200,10,10);
    ellipse(120,200,10,10);
    juego=2;
  }
}
function gover() {
  text("Puntuación final "+puntos+int(vel+veladd),windowWidth/2-100,windowHeight/2);
  text("Recarga la pagina",windowWidth/2-100,windowHeight/2+100);
}
function control(){
  if(keyCode=== ENTER){
    juego=0;
  }
  if((keyCode=== ENTER && vida<=0)){
    juego=0;
    vida=3;
  }
  if((keyCode=== SHIFT)&&(!(juego==2))){
    juego=1;
  }
}
function decoracion() {
  strokeWeight(10);
  stroke(25);
  if(x<=200+tam/2){
    stroke(255);
  }
  line(200,0,200,windowHeight);
}
}
