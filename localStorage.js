//Set the localStrorage
localStorage.setItem("name", "John");
localStorage.setItem("age", 20);

//get the localStorage
let name = localStorage.name;
let age = localStorage.getItem("age");
console.log("local storage name:", name, age);

// Upadte the localStorage
localStorage.setItem("name", "arham");
localStorage.setItem("age", 30);
name = localStorage.getItem("name");
age = localStorage.getItem("age");
console.log(name, age);

//Delete the localStorage
//? Remove the individual item
localStorage.removeItem("name");
localStorage.removeItem("age");

name = localStorage.getItem("name");
age = localStorage.getItem("age");

localStorage.setItem("name", "mALLICK");
localStorage.setItem("age", 14);
name = localStorage.getItem("name");
age = localStorage.getItem("age");
console.log(name, age);
//? clear the localStorage
localStorage.clear();
console.log("cleared the storage ", name, age);

// stringify will convert the array into JSON  array format
const data = [
  { name: "Aham", age: 14 },
  { name: "Bham", age: 20 },
  { name: "Sham", age: 40 },
  { name: "Houng", age: 16 },
];

console.log(data);
const dataJson = JSON.stringify(data);
console.log("into JSON array", dataJson);

// convert the JSON into an array
const dataArry = JSON.parse(dataJson);
console.log("into JS Array", dataArry);
