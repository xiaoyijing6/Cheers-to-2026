    function getRandom(min, max) {
      return Math.random() * (max - min) + min;
    }

    function createFirefly(container) {
      const firefly = document.createElement('img');
      firefly.className = 'firefly';
      firefly.src = `image/fire${Math.floor(getRandom(0, 6))}.png`;

      const x = getRandom(-200, container.clientWidth + 200);
      const y = getRandom(-200, container.clientHeight + 200);
      firefly.style.left = `${x}px`;
      firefly.style.top = `${y}px`;
       firefly.style.transform = 'scale(0.1)';
      firefly.style.opacity = getRandom(0.1, 0.2);
        

      container.appendChild(firefly);

      setTimeout(() => {
        moveFirefly(firefly);
      }, 100);
    }

    function moveFirefly(firefly) {
      const frequencyX = getRandom(0.002, 0.005); // 控制水平波浪的頻率
      const amplitudeX = getRandom(50, 100); // 控制水平波浪的振幅
      const frequencyY = getRandom(0.002, 0.005); // 控制垂直波浪的頻率
      const amplitudeY = getRandom(50, 100); // 控制垂直波浪的振幅

      const x = parseInt(firefly.style.left);
      const y = parseInt(firefly.style.top);

      const newX = x + Math.sin(y * frequencyX) * amplitudeX; // X 軸以正弦函數控制水平移動
      const newY = y + Math.sin(x * frequencyY) * amplitudeY; // Y 軸以正弦函數控制垂直移動

      firefly.style.opacity = getRandom(0.1, 0.5); // 更新透明度

      firefly.style.left = `${newX}px`;
      firefly.style.top = `${newY}px`;

      const scale = getRandom(0.2, 0.3);
      firefly.style.transform = `scale(${scale})`;

      setTimeout(() => {
        requestAnimationFrame(() => moveFirefly(firefly));
      }, 2000); // 控制移動的速度
    }

    const fireflyContainer = document.getElementById('fireflyContainer');
    const numFireflies = 100;
    for (let i = 0; i < numFireflies; i++) {
      createFirefly(fireflyContainer);
    }
      
        document.addEventListener('keydown', function(event) {
      if (event.key === 'g' || event.key === 'G') {
        const container = document.getElementById('fireflyContainer');
        container.style.display = (container.style.display === 'none') ? 'block' : 'none'; // 切換顯示/隱藏
      }
    });