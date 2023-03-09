class Circle {
  constructor(poids, posX, posY, color=null) {
    this.poids = poids;
    this.posX = posX
    this.posY = posY
    this.color = color
  }
  ChooseColor() {
    if (color == null){
      this.color
    }
  }
  DrawThis(){
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.poids, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
  }
}

// Initialisation du canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background ="#ff8"

// Création d'un objet rond
Cercle = new Circle(70, canvas.width / 2, canvas.height / 2, 0)


// Traqueur de souris
function mouseupdate (){
  window.pos = [event.clientX, event.clientY]
}
addEventListener("mousemove", mouseupdate)

// Position par défaut dela souris
window.pos = [canvas.width / 2, canvas.height / 2]

function getSpeed(){
  speedX = 0.05
  speedY = 0.05
  return [(window.pos[0] - Cercle.posX)*speedX, (window.pos[1] - Cercle.posY)*speedY]
}

function loop() {
  canvas.width = window.innerWidth;
  //Déplacement du cercle
  speed = getSpeed()
  Cercle.posX += speed[0];
  Cercle.posY += speed[1];

  console.log(Math.round(window.pos[0] - Cercle.posX), "/////", Math.round(window.pos[1] - Cercle.posY))
  Cercle.DrawThis()
  requestAnimationFrame(loop);
}


loop()






