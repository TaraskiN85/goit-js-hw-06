const form = document.querySelector(".login-form");

const [email, password, submitButton] = [...form.elements];

const checkForm = () => {
  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  }
};

const createObject = () => {
  const userObject = {
    email: email.value,
    password: password.value,
  };
  console.log(userObject);
};

const submitForm = (e) => {
  e.preventDefault();
  checkForm();
  createObject();
};

submitButton.addEventListener("click", submitForm);
