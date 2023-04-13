function getURLParams() {
  const params = new URLSearchParams(window.location.search);
  const urlParams = {};
  for (const [key, value] of params.entries()) {
    urlParams[key] = value;
  }
  return urlParams;
}

function displayParams() {
  const params = getURLParams();
  const listElement = document.getElementById("paramList");

  if (Object.keys(params).length !== 0) {
    // Cacher tous les autres éléments sauf la liste
    document.querySelector("nav.navbar").style.display = "none";
    document.querySelector("section").style.display = "none";

    for (const key in params) {
      const listItem = document.createElement("li");
      listItem.textContent = `${key}: ${params[key]}`;
      listElement.appendChild(listItem);
    }
  }
}
document.addEventListener("DOMContentLoaded", displayParams);

function toggleBurger() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".navbar-menu");
  burger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
}

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  burger.addEventListener("click", toggleBurger);
});
