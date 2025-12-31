  document.addEventListener('keydown', function(event) {
    const keyC = 67; // Key code for 'C' key

    if (event.keyCode === keyC) {
      chatVisible = !chatVisible;
      const chatWidget = document.getElementById('chat-widget');

      if (chatVisible) {
        chatWidget.style.display = 'block';
      } else {
        chatWidget.style.display = 'none';
      }
    }
  });
    
  let codeSequence = '';
  const konamiCode = '38384040373937396665'; // Up Up Down Down Left Right Left Right B A
  let playerVisible = false;

  document.addEventListener('keydown', function(event) {
    codeSequence += event.keyCode;

    if (codeSequence.endsWith(konamiCode)) {
      playerVisible = !playerVisible;
      const player = document.getElementById('twitch-player');

      if (playerVisible) {
        player.style.display = 'block';
      } else {
        player.style.display = 'none';
      }

      codeSequence = '';
    }
  });
   document.addEventListener('keydown', function(event) {
    const keyS = 83; // Key code for 'S' key

    if (event.keyCode === keyS) {
      const snowContainer = document.querySelector('.snow-container');
      snowContainer.style.display = snowContainer.style.display === 'none' ? 'block' : 'none';
    }
  });   
    
document.addEventListener('DOMContentLoaded', function() {
  const sakuraCanvas = document.getElementById('sakura');
  sakuraCanvas.style.display = 'none'; // 隱藏 canvas

  document.addEventListener('keydown', event => {
    if (event.code === 'KeyJ') {
      if (sakuraCanvas.style.display === 'none') {
        sakuraCanvas.style.display = 'block'; // 顯示 canvas
      } else {
        sakuraCanvas.style.display = 'none'; // 隱藏 canvas
      }
    }
  });
});