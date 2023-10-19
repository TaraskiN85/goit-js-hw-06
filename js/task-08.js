const form = document.querySelector(".login-form");

const [email, password, submitButton] = [...form.elements];

const createObject = () => {
  const userObject = {
    email: email.value,
    password: password.value,
  };
  console.log(userObject);
  form.reset();
};

const submitForm = (e) => {
  e.preventDefault();
  email.value === "" || password.value === ""
    ? alert("Всі поля повинні бути заповнені!")
    : createObject();
};

submitButton.addEventListener("click", submitForm);
