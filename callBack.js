const callback = () => console.log("Hello call back!");

function myFunction(callback) {
  console.log(callback);
}
myFunction(callback);

// call back and add into DOM
let ul = document.querySelector(".class-list");
const employee = ["john", "klen", "fred", "hungry"];
let html = ``;
employee.forEach((person) => {
  html += `<li> Employee Name is : ${person} </li>`;
});
console.log(html);
ul.innerHTML = html;
