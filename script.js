const audioInico = new Audio('xmen_theme.mp3');

audioInico.play();
audioInico.volume = 0.005;
window.addEventListener('change', tocarMusica);
function tocarMusica() {
  audioInico.play();
  console.log('mudou');
}
