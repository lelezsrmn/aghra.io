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

// Création d'un objet rond
Cercle = new Circle(70, canvas.width / 2, canvas.height / 2, 0)


// Traqueur de souris
function mouseupdate (){
  window.pos = [event.clientX, event.clientY]
}
addEventListener("mousemove", mouseupdate)

// Position par défaut dela souris
window.pos = [canvas.width / 2, canvas.height / 2]


function main(){
canvas.width = window.innerWidth;
Cercle.DrawThis()
Cercle.posX = window.pos[0]
Cercle.posY = window.pos[1]

}
main()






