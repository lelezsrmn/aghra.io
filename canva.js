//Ici on va s'occuper du jeu.

//Si qqn est motivé et souhaite modifier la structure pour mettre la class dans un module js et de même pour les fonctions.

class Circle {
  constructor(poids, posX, posY, img=null) {
    this.poids = poids;
    this.posX = posX;
    this.posY = posY;
    this.img = new Image();
    this.img.src = img;
  }

  DrawThis(){
    if (this.img == null){
      ctx.beginPath();
      ctx.arc(this.posX, this.posY, this.poids, 0, 2 * Math.PI);
      ctx.fillStyle = "#fff";
      ctx.fill();
    } else {
      if(true){
        // Vérifiez si l'image est chargée avec succès
        ctx.save()
        ctx.beginPath()
        ctx.arc(this.posX, this.posY, this.poids, 0, Math.PI * 2, false)
        ctx.strokeStyle = '#2465D3'
        ctx.stroke()
        ctx.clip()
        ctx.drawImage(this.img, this.posX - this.poids, this.posY - this.poids, this.poids * 2, this.poids * 2)
        ctx.restore()
      }
    }
  }
}
function sleep(ms) {
  //Timer pour faire une pause
  return new Promise(resolve => setTimeout(resolve, ms));
}
function mouseupdate (){
  // Traqueur de souris
  window.pos = [event.clientX, event.clientY]
}
function getSpeed(){
  //Pour le mouvement du cercle
  speedX = 0.05
  speedY = 0.05
  maxVecteur = 0.02

  dX = (window.pos[0] - Cercle.posX)
  dY = (window.pos[1] - Cercle.posY)
  vdx = Math.floor(dX / 100)
  return [dX*speedX, dY*speedY]
}
async function timerPoint(){
// Timer random qui va entraîner un spawn de petits points
Time = Math.floor(Math.random()*5000) + 1
setTimeout(() => {
  creationPoint();
  timerPoint()
}, Time);
}
function creationPoint(){
  nbPointMax = 10

  nbPoint = Math.floor(Math.random() * nbPointMax) + 1
  for(i=0; i<nbPoint; i++){
    console.log("un point en plus")
  }
}
function loop() {
// Fonction qui va se répéter
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  //Déplacement du cercle
  speed = getSpeed()
  Cercle.posX += speed[0];
  Cercle.posY += speed[1];

  Cercle.DrawThis()

  requestAnimationFrame(loop);
}

function Main() {
  timerPoint()
  loop()
}


// Initialisation

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.background ="#ff8"

addEventListener("mousemove", mouseupdate)

// Position par défaut dela souris
window.pos = [canvas.width / 2, canvas.height / 2]

// Création d'un objet rond
var Cercle = new Circle(150, canvas.width / 2, canvas.height / 2, "https://media3.giphy.com/media/3og0IuGb2e5U3bMIco/giphy.gif")

Main()