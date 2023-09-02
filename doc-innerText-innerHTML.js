const content = document.querySelector(".content");
// console.log(content);
content.innerText = "New content "; // ll change the inner text of the contents
content.innerText += "    Adding the few more words to the content";

const contentOne = document.querySelector(".content-one");
contentOne.innerHTML = `<h2> New Heading content </h2>`; // ll change the inner element(HTML) of the dom element
contentOne.innerHTML += `<h2> Adding to New Heading content</h2>`;

const fruits = ["mango", "apple", "orange", "grape"];

fruits.forEach((name) => {
  contentOne.innerHTML += `<p>${name}</p> `;
});

const success = document.querySelector(".success");

console.log(success.getAttribute("href"));
console.log(success.getAttribute("class"));

success.setAttribute("class", "error");
success.setAttribute("style", "color:red;");

//chaning css
success.style.margin = "10px";
success.style.display = "block";
success.style.fontSize = "24px";
success.style.color = "crimson";
success.style.margin = ""; // in this wan remove the property

// Finding Childrens
const article = document.querySelector("article");
console.log("children", article.children); //output is  HTMLCollection so we can't add forEach for the HTMLCollection
// convert HTMLCollection in to array
Array.from(article.children);
console.log(
  " convert HTMLCollection in to array",
  Array.from(article.children)
);

Array.from(article.children).forEach((elem) => {
  elem.classList.add("suceess");
});

// Finding Parent
const parent = document.querySelector("article");
console.log("parent.parentElement", parent.parentElement);
console.log(parent.parentElement.parentElement);

//Finding Siblings
const siblings = document.querySelector(".sibling");
console.log("previousElementSibling", siblings.previousElementSibling);
console.log("nextElementSibling", siblings.nextElementSibling);
console.log("children", article.parentElement.parentElement.children);
