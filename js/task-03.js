const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesList = document.querySelector(".gallery");
imagesList.style.display = "grid";
imagesList.style.gridTemplateColumns = "1fr 1fr 1fr";
imagesList.style.gap = "24px";

const createMarkup = () => {
  const markup = images
    .map(({ url, alt }) => {
      return `<li>
        <img src='${url}' alt='${alt}' style='max-width:100%;height:auto;'></img>
      </li>`;
    })
    .join("");
  imagesList.insertAdjacentHTML("afterbegin", markup);
};

createMarkup();
