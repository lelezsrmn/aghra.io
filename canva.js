//Ici on va s'occuper du jeu.

//Si qqn est motivé et souhaite modifier la structure pour mettre la class dans un module js et de même pour les fonctions.

class Circle {
  constructor(poids, posX, posY, username=null, img=null) {
    this.poids = poids;
    this.posX = posX;
    this.posY = posY;
    this.username = username
    if(img != null) {
      this.img = new Image();
      this.img.src = img;
    } else {
      this.img = null;
    }
    this.color = randomColor()
  }

  DrawThis(){
    if (this.img == null){
      ctx.beginPath();
      ctx.arc(this.posX, this.posY, this.poids, 0, 2 * Math.PI);
      ctx.fillStyle = this.color;
      ctx.fill();
    } else {
      if(true){
        // Vérifiez si l'image est chargée avec succès
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.poids, 0, Math.PI * 2, false);
        ctx.strokeStyle = '#2465D3';
        ctx.stroke();
        ctx.clip();
        ctx.drawImage(this.img, this.posX - this.poids, this.posY - this.poids, this.poids * 2, this.poids * 2);
        ctx.restore();
      }
    }
    if(this.username != null){
      ctx.font = this.poids/4 + "px Colibri";
      ctx.strokeText(this.username, this.posX - this.poids / 2, this.posY);
    }
    ctx.font = this.poids/6 + "px Colibri";
    ctx.strokeText(this.poids, this.posX, this.posY + this.poids/4);
  }
}
function sleep(ms) {
  //Timer pour faire une pause
  return new Promise(resolve => setTimeout(resolve, ms));
}
function randomColor(){
  answers = ["#0000FF", "#008000", "#800080", "#FF0000",
              "#FF7F50", "#B22222", "#FF69B4", "#E389B9"]
  var nb = Math.floor(Math.random() * answers.length)
  return answers[nb]
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
    x = Math.floor(Math.random() * canvas.width) + 1
    y = Math.floor(Math.random() * canvas.width) + 1
    listePoint.push(new Circle(10, x, y))
  }
}

function detectCollision(circle1, circle2) {
  const distance = Math.sqrt((circle1.posX - circle2.posX)**2 + (circle1.posY - circle2.posY)**2)
  return distance <= circle1.poids + circle2.poids
}

function loop() {
  // Fonction qui va se répéter
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
  //Déplacement du cercle
  speed = getSpeed()
  Cercle.posX += speed[0];
  Cercle.posY += speed[1];

  // Vérifiez si le cercle principal entre en collision avec un cercle dans la liste
  for (let i = 0; i < listePoint.length; i++) {
    const point = listePoint[i]
    if (detectCollision(Cercle, point)) {
      // Supprimer le cercle de la liste
      listePoint.splice(i, 1);
      // Augmenter le poids du cercle principal
      Cercle.poids += 5;
    } else {
      // Afficher le cercle
      point.DrawThis();
    }
  }

  // Afficher le cercle principal
  Cercle.DrawThis()

  // Appeler la fonction en boucle
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
var Cercle = new Circle(150, canvas.width / 2, canvas.height / 2, "Mia Khalifa")

let listePoint = []
Main()