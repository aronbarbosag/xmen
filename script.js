const audioInico = new Audio('xmen_theme.mp3');
window.addEventListener('change', tocarMusica);
function tocarMusica() {
  audioInico.volume = 0.005;
  audioInico.play();
  
}
