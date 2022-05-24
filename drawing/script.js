const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const clearBtn = document.getElementById("clear");
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');

let size = 30;
let isPressed = false;
let color = 'black';
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offSetY;
})

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
})

canvas.addEventListener('mousemove', (e) => {
  console.log(e);
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x, y);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = 2 * size;
  ctx.stroke();
}

increaseBtn.addEventListener('click', () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }
  updateSize();
});

decreaseBtn.addEventListener('click', () => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }
  updateSize();
});

clearBtn.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function updateSize() {
  sizeEl.innerText = size;
}

colorEl.addEventListener('change', (e) => {
  color = e.target.value;
});

// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawCircle(x, y);
//
//   requestAnimationFrame(draw);
// }
//
// draw();
