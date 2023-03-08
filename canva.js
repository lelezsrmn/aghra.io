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
    var X = event.clientX;
    var Y = event.clientY;
    ctx.beginPath();
    ctx.arc(X, Y, this.poids, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
  }
}


var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

Cercle = new Circle(70, window.innerWidth / 2, window.innerHeight / 2, 0)




function mouseupdate (){
  canvas.width = window.innerWidth;
  Cercle.DrawThis()
  Cercle.posX = Cercle.posX + Math.cos(event.clientX - (window.innerWidth / 2))
  Cercle.posY = Cercle.posY + Math.sin(event.clientY - (window.innerHeight / 2))
}
addEventListener("mousemove", mouseupdate);







