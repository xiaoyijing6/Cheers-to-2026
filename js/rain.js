    const canvas = document.getElementById('rainCanvas');
    const ctx = canvas.getContext('2d');

    let drops = [];
    const dropCount = 500;
    const minSpeed = 10; // 最低速度
    const angle = 80; // 下降角度

canvas.style.display = 'none';

    function setup() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      for (let i = 0; i < dropCount; i++) {
        let speed = Math.random() * 5 + 2;
        speed = speed < minSpeed ? minSpeed : speed; // 確保速度不低於最低值
        let radians = (angle * Math.PI) / 180; // 將角度轉換為弧度
        let xSpeed = Math.cos(radians) * speed;
        let ySpeed = Math.sin(radians) * speed;
        // 計算更大的初始位置
let startX = Math.random() * canvas.width * 1.2 - canvas.width * 0.1;
let startY = Math.random() * canvas.height * 1.2 - canvas.height * 0.1;

        drops.push({
          x: startX,
          y: startY,
          length: Math.random() * 20 + 0, // 更長的尾巴
          xSpeed: xSpeed,
          ySpeed: ySpeed
        });
      }

      requestAnimationFrame(draw);
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      drops.forEach(drop => {
        // 雨滴本體
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x - drop.xSpeed * 10, drop.y - drop.ySpeed * 5); // 調整尾巴的長度
        ctx.strokeStyle = `rgba(240, 247, 255, 0.3)`; // 50% 的透明度
        ctx.lineWidth = 1;
        ctx.stroke();

        // 雨滴尾巴
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x - drop.xSpeed * 30, drop.y - drop.ySpeed * 10); // 更長的尾巴
        ctx.strokeStyle = `rgba(240, 247, 255, 0.1)`; // 30% 的透明度
        ctx.lineWidth = 1;
        ctx.stroke();

        drop.x += drop.xSpeed;
        drop.y += drop.ySpeed;

        if (drop.y - drop.length > canvas.height || drop.x < -canvas.width / 2 || drop.x > canvas.width * 1.5) {
          drop.y = -drop.length;
          drop.x = Math.random() * canvas.width * 2 - canvas.width / 2;
        }
      });

      requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setup();
    });

  document.addEventListener('keydown', event => {
      if (event.code === 'KeyR') {
        if (canvas.style.display === 'none') {
          canvas.style.display = 'block'; // 顯示 canvas
          setup(); // 啟動雨滴效果
        } else {
          canvas.style.display = 'none'; // 隱藏 canvas
        }
      }
    });