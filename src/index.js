import "./styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";

const content = document.querySelector("#content");
const div = document.createElement("div");
div.innerHTML = home;
content.appendChild(div);

const nav = document.querySelector("nav");
nav.addEventListener("click", (btn) => {
  switch (btn.target.textContent) {
    case "Home":
      div.innerHTML = home;
      break;
    case "Menu":
      div.innerHTML = menu;
      break;
    case "Contact":
      div.innerHTML = contact;
  }
});
