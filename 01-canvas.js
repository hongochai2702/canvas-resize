const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

ctx.fillRect(10, 10, 50, 50);
ctx.fillRect(100, 10, 50, 50);
ctx.fillRect(200, 10, 50, 50);
ctx.fillRect(300, 10, 50, 50);
