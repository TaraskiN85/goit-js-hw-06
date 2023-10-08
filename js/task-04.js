const currentValue = document.querySelector("#value");

let counterValue = 0;

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  currentValue.textContent = counterValue;
});

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  currentValue.textContent = counterValue;
});
