import plus from "./plus.js";
import "./styles.css";
import rabbit from "./rabbit_large.webp";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `<img src=${rabbit}>`;
});

console.log(process.env.NODE_ENV);
let env;
if (process.env.NODE_ENV === "development") {
  env = dev;
} else {
  env = pro;
}

console.log(env);
