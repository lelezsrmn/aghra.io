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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

Cercle = new Circle(70, canvas.width / 2, canvas.height / 2, 0)



function mouseupdate (){
  return "coucou"
}

addEventListener("mousemove", function(event){
  var pos = mouseupdate(event);})

async function coucou(){
await sleep(500)
console.log(pos);
canvas.width = window.innerWidth;
Cercle.DrawThis()
Cercle.posX = (Cercle.posX + (pos))/2
Cercle.posY = Cercle.posY
}

coucou()


