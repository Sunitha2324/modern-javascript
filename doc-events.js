const button = document.querySelector(".button-class");
console.log(button);
button.addEventListener("click", () => {
  console.log("button clicked");
});

const addItem = document.querySelector(".add-item");
const itemList = document.querySelector(".item-list");

// Add a new item
// addItem.addEventListener("click", () => {
//   itemList.innerHTML += `<li> Add new item</li>`;
// });

// Another method to add item
addItem.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "add new item";
  li.setAttribute("class", "new-item");
  itemList.append(li);
});

// const item = document.querySelectorAll("li");
// item.forEach((ele) => {
//   ele.addEventListener("click", (event) => {
//     console.log("Item Clicled", event.target, "LI");
//     event.target.style.color = "red";
//     event.target.style.textDecoration = "line-through";
//     // event.target.remove();
//   });
// });

itemList.addEventListener("click", (e) => {
  console.log("Clicked on UL");
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
