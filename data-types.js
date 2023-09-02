console.log("First cons");

// String methods
var stringTest = "First test";
console.log(stringTest.slice(1, 3));
console.log(stringTest.substr(1, 3));
console.log(stringTest.replace("First", "second"));

//? Number methods / *, - , %
const value = 10;
const pai = 3.16;

// it will give the remainder i.e below one is 0.51999
console.log(value % pai);
// ** is squareOf
let result = value * pai ** 2;
console.log(result);

// Order of Operations is BIDMAS(Brackets, Indice(%, **), Division, multiplication, addition, subtract)
let likes = 10;
console.log(likes); // 10
// console.log(likes++); //11
console.log(likes + 2); //12
console.log((likes += 20)); //30
console.log((likes -= 5)); //25
console.log(likes * 2); //50
console.log(likes / 2); //12.5

//Liters or templates string

const templates = `template string ${likes} with the value ${result}`;
console.log(templates);
let html = `<div class> ${likes}</div> <br/> <h2>${result}</h2>`;
console.log(html);

//Array methods
let testColor = ["red", "green", "blue", "yellow"];
console.log(testColor);
console.log("Join by ---", testColor.join(" -"));
console.log("Join by ?", testColor.join(" ?"));

let colorset = ["orange", "peach"];
console.log(colorset.concat(testColor));
console.log(colorset.push("navy"));
console.log(colorset);
console.log(colorset.pop("navy"));
console.log(colorset);
console.log(colorset.includes("orange"));

//! Example of include function
const resultColor = () => {
  colorset.includes("orange")
    ? console.log("orange present")
    : console.log("orange not present");
};

resultColor();
