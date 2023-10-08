const categoriesList = document.querySelector("#categories");
const categories = categoriesList.children;

const showCategoriesNumber = () => {
  console.log("Number of categories: ", categories.length);
  [...categories].forEach((category) => {
    console.log("Category: ", category.firstElementChild.textContent);
    console.log("Elements: ", category.lastElementChild.children.length);
  });
};

showCategoriesNumber();
