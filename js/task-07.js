const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.value = input.min;
const changeFontSize = () => {
  span.style.fontSize = `${input.value}px`;
};

input.addEventListener("input", changeFontSize);
