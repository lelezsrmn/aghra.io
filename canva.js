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

// Initialisation du canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background ="#ff8"

// Création d'un objet rond
var Cercle = new Circle(150, canvas.width / 2, canvas.height / 2, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5R_8dF3qsQCSbsbc61esJFbUffJ862WN6Q&usqp=CAU")

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
  maxVecteur = 0.02

  dX = (window.pos[0] - Cercle.posX)
  dY = (window.pos[1] - Cercle.posY)
  vdx = Math.floor(dX / 100)
  return [dX*speedX, dY*speedY]
}

function loop() {

  canvas.width = window.innerWidth;

  //Déplacement du cercle
  speed = getSpeed()
  Cercle.posX += speed[0];
  Cercle.posY += speed[1];
  Cercle.DrawThis()

  requestAnimationFrame(loop);
}
loop()