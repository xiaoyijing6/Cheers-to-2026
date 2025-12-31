document.addEventListener("DOMContentLoaded", function() {
  const snowContainer = document.querySelector(".snow-container");
  const snowflakes = 200; // 設定雪花的數量

  for (let i = 0; i < snowflakes; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snow");
    snowContainer.appendChild(snowflake);
  }
});
