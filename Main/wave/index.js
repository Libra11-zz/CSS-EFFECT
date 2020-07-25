let speed = 50;
let Width = 300;
let Height = 300;
let offsetX = 0;
let offsetYRange = 1.1;
let offsetY = 0;
let isDrawContainer = false;
let offsetYSpeed = 0.003;
let progressNum = 0;

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.width = Width;
canvas.height = Height;
if (window.devicePixelRatio) {
  canvas.style.width = Width + "px";
  canvas.style.height = Height + "px";
  canvas.height = Height * window.devicePixelRatio;
  canvas.width = Width * window.devicePixelRatio;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
}

function drawWave(ctx, offsetX, offsetY, waveW, waveH, color) {
  let startX = 0;
  ctx.beginPath();
  let startPos = [startX];
  for (let x = startX; x < Width; x++) {
    let y =
      (1 - offsetY) * Width +
      waveH * Math.sin((startX + x) * waveW + offsetX) +
      offsetY;
    if (startPos.length == 1) {
      startPos.push(y);
    }
    ctx.lineTo(x, y);
  }
  ctx.lineTo(Width, Width);
  ctx.lineTo(startX, Width);
  ctx.lineTo(startPos[0], startPos[1]);
  ctx.fillStyle = color;
  ctx.fill();
}
function draw() {
  ctx.clearRect(0, 0, Width, Height);
  offsetX += speed;
  if (!isDrawContainer) {
    drawContainer(ctx);
  }
  drawWave(ctx, offsetX, offsetY, 0.04, 6, "#82fba1");
  drawWave(ctx, offsetX + 2, offsetY - 0.02, 0.04, 8, "#1cd04b");
  if (offsetY < offsetYRange) {
    offsetY += offsetYSpeed;
    progressNum += 100 / (offsetYRange / offsetYSpeed);
    document.querySelector(".proNum").innerHTML = parseInt(progressNum) + "%";
  }
  requestAnimationFrame(draw);
}
function drawContainer(ctx) {
  var pointR = Width / 2,
    lineWidth = 10,
    circleR = pointR - lineWidth;

  ctx.lineWidth = lineWidth;
  ctx.beginPath();
  ctx.arc(pointR, pointR, circleR, 0, 2 * Math.PI);
  ctx.strokeStyle = "rgba(192,225,242,0.3)";
  // ctx.stroke();
  ctx.clip();
  isDrawContainer = true;
}
draw();
