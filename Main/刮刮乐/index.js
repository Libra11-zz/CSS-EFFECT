var canvas = document.getElementById("canvas"),
  context = canvas.getContext("2d"),
  // 笔刷半径
  brushRadius = (canvas.width / 100) * 5,
  img = new Image();

if (brushRadius < 50) {
  brushRadius = 50;
}

img.onload = function () {
  context.drawImage(img, 0, 0, canvas.width, canvas.height);
};
img.src = "./guaguale.png";

// 获取笔刷的位置
function getBrushPos(xRef, yRef) {
  // 返回元素的大小及其相对于视口的位置
  var canvasRect = canvas.getBoundingClientRect();
  return {
    x: Math.floor(
      ((xRef - canvasRect.left) / (canvasRect.right - canvasRect.left)) *
        canvas.width
    ),
    y: Math.floor(
      ((yRef - canvasRect.top) / (canvasRect.bottom - canvasRect.top)) *
        canvas.height
    ),
  };
}

// 画点
function drawDot(mouseX, mouseY) {
  context.beginPath();
  context.arc(mouseX, mouseY, brushRadius, 0, 2 * Math.PI, true);
  context.fillStyle = "#000";
  // 现有内容保持在新图形不重叠的地方。（关键点）
  context.globalCompositeOperation = "destination-out";
  context.fill();
}

// 添加鼠标移动事件
canvas.addEventListener(
  "mousemove",
  function (e) {
    var brushPos = getBrushPos(e.clientX, e.clientY);
    // 检测是否按下了左键
    if (e.buttons === 1) {
      drawDot(brushPos.x, brushPos.y);
    }
  },
  false
);
