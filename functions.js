//function declarations
function story() {
  console.log("story tell...");
}

// calling the function or invoking the function
story();

// can store the function in variables
const shortstory = () => console.log("shortstory tell...");
// const shortstory = function () {
//   console.log("shortstory tell...");
// };
shortstory();

// function with arguments and parameters
const speak = function (name, greet) {
  console.log(`Hi Team, my name is ${name}, gud ${greet}`);
};
speak(); // without arguments it will give undefined for name and greet
speak("shan", "mrg"); // with arguments

// function with default arguments values and parameters
const speakTeam = function (name = "Lalitha", greeting = "day") {
  console.log(`Hello ${name} gud ${greeting}`);
};
speakTeam(); // will take default parameter values
speakTeam("Chamundi", "evening"); // will overwrite default values and return the provided values

// return value from function
const circle = function (radius) {
  const area = 3.13 * radius ** 2;
  // return  3.14 * radius ** 2
  return area;
};
const line = circle(3);
console.log(line);

const triangle = function (line) {
  return line * 2;
};
console.log(triangle(2));

// Arrow Functions
const arrow = () => "Hello arrow!";

const arrowOne = (one) => `Hello Arrow ${one}`;
const arrowSecond = (one, two) => `Hello Arrow ${one} ${two}`;
const arrowThree = (one, two, three) => {
  return `<div>
      with multiple arrow arguments Hello Arrow ${one} ${two} ${three}
    </div>`;
};
console.log(`Hello Arrow, ${arrowThree(2, 3, 4)}`);

//Methods
const person = "Adrian devids";
person.toUpperCase(); // method
console.log(person.toUpperCase());
person.charAt(0).toUpperCase();
console.log(person.lastIndexOf("0") === 0); // method

// passing function as a argument to a function called callback or passing a function to another function as a argument
const myFunction = (callbackfunction) => {
  const value = 5;
  callbackfunction(value);
};

myFunction((value) => console.log(value));

// foreach loop
const people = ["John", "kelvin", "hung", "Bob"];
// foreach loop syntax arrayName.forEach(callbackfunction)
people.forEach(() => console.log("people in foreach loop"));
people.forEach((person) => console.log(person));
people.forEach((person, index) => {
  console.log(index, person);
});

const logPerson = (person, index) =>
  console.log(`Hello - ${index} - ${person}`);
people.forEach(logPerson);
