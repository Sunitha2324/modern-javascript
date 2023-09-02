//Loops

for (let i = 0; i < 5; i++) {
  console.log(`value of i ${i}`);
}

let names = ["ram", "sham", "dhang"];
for (let i = 0; i < names.length; i++) {
  console.log(`value of name ${i}`); // it will display the postion of each value
  console.log(`name of the person ${names[i]}`); // it will display the name of the person
  const html = `<div> ${names[i]}</div>`;
  console.log(html);
}

// While loop same as for loop
// for(let i = 0; i <5; i++)
//for(initialize; condition, increment);

let i = 0; // initializing
while (i < 5) {
  // consitioning
  console.log(i);
  i++; // Increment
}

let j = 0;
while (j < names.length) {
  console.log("name inside while loop: ", names[j]);
  j++; // Increment
}

// do while loop
let k = 0;
do {
  console.log(`loop${k}`);
  k++;
} while (k < 5);

// ? Conditions
//If condition
const age = [20, 24, 35, 50, 30, 33, 44];
for (i = 0; i < age.length; i++) {
  if (age[i] < 26) {
    console.log(age[i]);
  }
}

const engine_name = "JCB Engine";
if (engine_name.length > 2) {
  console.log(engine_name);
}

// if else block
let engineprice = [200, 300, 400];
if (engineprice < 100) {
  console.log(`engineprice is less than 100`);
} else {
  console.log(`engineprice is greater than 100`);
}

// if else if block
let password = "info@info";
if (password.length <= 10 && password.includes(`@`)) {
  console.log(`password is strong`);
} else if (password.length >= 5 || password.includes(`@`)) {
  console.log(`greater than 5`);
} else {
  console.log(`greater than 10`);
}

// logical operators
console.log(true); // true
console.log(false); // false
console.log(!true); // false
console.log(!false); // true

// Break and continue operators
let score = [20, 10, 40, 60, 0, 100, 50, 45];
for (let i = 0; i <= score.length; i++) {
  console.log(score[i]);
  if (score[i] === 0) {
    console.log("skipping");
    continue;
  }
  if (score[i] === 60) {
    console.log("scored 60");
    break;
  }
}

// Switch conditions
let grade = "B";

switch (grade) {
  case "A":
    console.log("got grade A");
    break;
  case "B":
    console.log("got grade B");
    break;
  case "C":
    console.log("got grade C");
    break;
  case "default":
    console.log("got grade default");
    break;
}

// let , const, var
//! var and let are block scoped but var is not scopped, outside the block scope let and const can't be accessed
// let
let animalName = "Elephant";
if (animalName === "Elephant") {
  let animalName = "tiger";
  let animal_age = 20;
  console.log(animalName, animal_age);
}
console.log("animalName: " + animalName);

// const
const f_name = "Sirname";
if (f_name === "Sirname") {
  const f_name = "tiger";
  const animal_age = 20;
  console.log(f_name, animal_age);
}
console.log("f_name: " + f_name);

// const
var l_name = "Sirname";
if (l_name === "Sirname") {
  var l_name = "tiger";
  var animal_age = 20;
  console.log(l_name, animal_age);
}
// ? var is defined inside the block but still can be accessed outside the block scope
console.log("Animal : " + animal_age);
