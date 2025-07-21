// Khởi tạo QR
new QRCode(document.getElementById("qrcode"), {
  text: "https://example.com", // <-- Thay link bạn muốn ở đây
  width: 100,
  height: 100,
  colorDark : "#000000",
  colorLight : "#ffffff",
});

// Vẽ trái tim bằng particles
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 500;

function pointOnHeart(t) {
  const x = 16 * Math.pow(Math.sin(t), 3);
  const y = -(
    13 * Math.cos(t) -
    5 * Math.cos(2 * t) -
    2 * Math.cos(3 * t) -
    Math.cos(4 * t)
  );
  return { x, y };
}

for (let i = 0; i < particleCount; i++) {
  const t = Math.PI * 2 * Math.random();
  const pos = pointOnHeart(t);
  particles.push({
    x: canvas.width / 2,
    y: canvas.height / 2,
    tx: canvas.width / 2 + pos.x * 20,
    ty: canvas.height / 2 + pos.y * 20,
    speed: Math.random() * 0.05 + 0.01,
  });
}

function animate() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let p of particles) {
    const dx = p.tx - p.x;
    const dy = p.ty - p.y;
    p.x += dx * p.speed;
    p.y += dy * p.speed;

    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(animate);
}

animate();
