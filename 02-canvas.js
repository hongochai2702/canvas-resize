const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgba(255, 0, 0, 0.1)";
ctx.fillRect(10, 10, 50, 50);
ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
ctx.fillRect(100, 10, 50, 50);
ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
ctx.fillRect(200, 10, 50, 50);
ctx.fillStyle = "rgba(0, 0, 158, 1)";
ctx.fillRect(300, 10, 50, 50);

// Line
ctx.beginPath();
ctx.moveTo(10, 300);
ctx.lineTo(300, 100);
ctx.lineTo(400, 300);
ctx.lineTo(300, 400);
ctx.lineTo(10, 300);
ctx.lineTo(400, 300);
// ctx.moveTo(10, 300);
ctx.lineTo(170, 190);
ctx.stroke();
ctx.closePath();
// Arc / Circle

// ctx.beginPath();
// ctx.arc(300, 300, 30, Math.PI * 2, false);
// ctx.strokeStyle = "blue";
// ctx.stroke();

for (var i = 0; i < 3000; i++) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  ctx.beginPath();
  ctx.arc(x, y, 30, Math.PI * 2, false);
  ctx.strokeStyle = "red";
  ctx.stroke();
}
