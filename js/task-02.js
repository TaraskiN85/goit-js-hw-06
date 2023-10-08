const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");

const createMarkup = () => {
  ingredients.forEach((ingredient) => {
    const ingredientLi = document.createElement("li");
    ingredientLi.textContent = ingredient;
    ingredientLi.classList.add("item");
    ingredientsList.append(ingredientLi);
  });
};

createMarkup();
