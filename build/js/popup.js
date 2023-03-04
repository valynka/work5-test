document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.querySelector("#open-popup");
  const closeButton = document.querySelector("#close-popup");
  const popup = document.querySelector(".popup");

  openButton.addEventListener("click", () => popup.classList.add("show"));
  closeButton.addEventListener("click", () => popup.classList.remove("show"));
});
