var tiros = [];
var tiro;
var tir;
var obs;
var obstaculos = [];
var nave;
var pontos = 0;
var tela;
var fase=0;
function preload(){
  tir = loadImage("bullet.png")
  obs = loadImage("obstaculo.png")
  nave = loadImage('nave.png')
  tela = loadImage('iPhone 14 - 1 (3).png')
}

function setup() {
  createCanvas(400, 550);
  for(var i = 0; i < 10; i++){
    var obstaculo = {
      x: random(0, width),
      y: random(-1000, 0)
    }
    obstaculos.push(obstaculo)
  }
}

function draw() {
  // CONSTROI MENU AQUI
  if(fase == 1){
  background("rgb(5,1,17)");
  image(tela, 200, 275);
  imageMode(CENTER)
  image(nave, mouseX, height - 40, 80, 70);
  for(var tiro of tiros){
    tiro.y -= 5
    image(tir, tiro.x, tiro.y, 30, 30, 5)
  }
  
  for(var obstaculo of obstaculos){
    obstaculo.y += 2
    image(obs, obstaculo.x,obstaculo.y, 50, 50)
    if(obstaculo.y > height){
      text("Game Over", 160, 270)
      noLoop()
    }
  }
  
  for (var obstaculo of obstaculos){
    for (var tiro of tiros){
      if(dist(obstaculo.x, obstaculo.y, tiro.x, tiro.y) < 25){
        obstaculos.splice(obstaculos.indexOf(obstaculo), 1)
        tiros.splice(tiros.indexOf(tiro), 1)
    var newObstaculo = {
      x: random(0, width),
      y: random(-1000, 0)
    }
    obstaculos.push(newObstaculo)
    pontos += 1
      }
    }
  }
  
  text(pontos, 20, 50)
  }
}

function mousePressed(){
  tiro = {
    x: mouseX,
    y: height - 60
  }
  tiros.push(tiro)
}
