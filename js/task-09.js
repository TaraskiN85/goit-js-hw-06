const body = document.querySelector("body");
const colorBtn = document.querySelector("button");
const colorSpan = document.querySelector(".color");
colorBtn.addEventListener("click", colorBody);

function colorBody() {
  const currentColor = getRandomHexColor();
  body.style.backgroundColor = currentColor;
  colorSpan.textContent = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
