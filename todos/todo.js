const formref = document.querySelector(".add");
const list = document.querySelector(".todos");

formref.addEventListener("submit", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  li.textContent = `${formref.add.value}`;
  list.append(li);
});

// const formValue = document.textContent();
const listGroup = document.querySelector(".list-group");
const listItem = document.querySelectorAll("li");

listGroup.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.remove();
  }
});
