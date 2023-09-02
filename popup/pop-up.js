const button = document.querySelector(".popup-button");
const popupWrapeer = document.querySelector(".popup-wrapper");
const popupClose = document.querySelector(".popup-close");

button.addEventListener("click", () => {
  console.log("Button clicked");
  popupWrapeer.style.display = "block";
});

popupClose.addEventListener("click", () => {
  setTimeout(() => {
    popupWrapeer.style.display = "none";
  }, 1000);
});
popupWrapeer.addEventListener("click", () => {
  popupWrapeer.style.display = "none";
});
