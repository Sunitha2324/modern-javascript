const para = document.querySelector("p"); // it select the first matching element not all
console.log(para);

const error = document.querySelector(".error"); // it select the first matching class,  not all
console.log(error);

const errorOne = document.querySelector("div.error"); // it will select the error class with div
console.log(errorOne);

const errorThree = document.querySelector("body > ol.class-list");
console.log(errorThree);

const selectAll = document.querySelectorAll("div");
console.log(selectAll);

//
const documentId = document.getElementById("name"); // No need to mention #
const documentClass = document.getElementsByClassName("error"); // No  need to mention .
const documentName = document.getElementsByName("name");
console.log("documentName", documentName);
const docummentTag = document.getElementsByTagName("a");

console.log(
  documentId,
  `<br/>`,
  documentClass,
  `<br/>`,
  documentName,
  `<br/>`,
  docummentTag
);
