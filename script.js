// Hiệu ứng tim bay lên trời
document.addEventListener("DOMContentLoaded", function () {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart-float");
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }, 300);
});
