const checkedInput = document.querySelector("#validation-input");

checkedInput.addEventListener("blur", () => {
  console.log(checkedInput.dataset.length);
  console.log(checkedInput.value.length);
  if (checkedInput.value.length != checkedInput.dataset.length) {
    checkedInput.classList.remove("valid");
    checkedInput.classList.add("invalid");
  }
  if (checkedInput.value.length == checkedInput.dataset.length) {
    checkedInput.classList.remove("invalid");
    checkedInput.classList.add("valid");
  }
});
