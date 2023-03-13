//Ici on va s'occuper du menu de démarrage pour récuperer le speudo et surtout
//Le plus important, si il y a un skin de rentrer


// Mode plein écran
function fullscreen(){
  toggleFullScreen();
}
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

// Ligne à modifier pour faire le mode plein écran lors du clique sur un bouton spécifique
var fullscreenBtn = document.getElementById("fullScreen");
fullscreenBtn.addEventListener("click", fullscreen)
