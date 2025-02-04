import { createElement } from "./utils.js";
import pizza from "./food-pic-1.jpg";
import burger from "./food-pic-2.jpg";
import salad from "./food-pic-3.jpg";

export function renderPageMenu() {
  const body = document.querySelector("#content");
  const title = createElement("div", null, body, "title");
  const food = createElement("div", null, body, "food");

  title.appendChild(createElement("h1", "Menu", title, "title-text"));

  const menuItems = [
    {
      title: "Some Kind of Pizza Thing",
      description: "Salad with what looks like pizza.",
      price: "$25.00",
      image: pizza,
    },
    {
      title: "Generic Burger",
      description: "The same burger you've had a million times before.",
      price: "$25.00",
      image: burger,
    },
    {
      title: "Vegetable Kebab",
      description: "All vegetables (we think).",
      price: "$20.00",
      image: salad,
    },
  ];

  menuItems.forEach((item) => {
    const foodDiv = createElement("div", null, food, "foodDiv");

    const foodTitle = createElement("h1", item.title, foodDiv, "food-title");
    const foodDescription = createElement(
      "p",
      item.description,
      foodDiv,
      "food-description"
    );
    const foodPrice = createElement("p", item.price, foodDiv, "food-price");
    const foodImage = createElement("img", null, foodDiv, "food-image");
    foodImage.src = item.image;

    foodDiv.appendChild(foodTitle);
    foodDiv.appendChild(foodDescription);
    foodDiv.appendChild(foodPrice);
    foodDiv.appendChild(foodImage);
  });
}
