// console.log("Hello World!");
import { renderPageHome } from "./home.js";
import "./menu.js";
import "./about.js";
import "./styles.css";
import { renderPageMenu } from "./menu.js";
import { renderPageAbout } from "./about.js";

const homeBtn = document.querySelector("#home-button");
const menuBtn = document.querySelector("#menu-button");
const aboutBtn = document.querySelector("#about-button");
const content = document.querySelector("#content");
homeBtn.addEventListener("click", (e) => {
  content.textContent = "";
  renderPageHome();
});
menuBtn.addEventListener("click", (e) => {
  content.textContent = "";
  renderPageMenu();
});
aboutBtn.addEventListener("click", (e) => {
  content.textContent = "";
  renderPageAbout();
});

renderPageHome();
