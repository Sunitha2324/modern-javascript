// rest oprator
function double(...num) {
  console.log(num);
  num.map((x) => console.log(x));
}
double(1, 2, 3, 4);

//spread operator
const people = ["shoun", "joun", "pual", "laigh"];

const guys = ["huag", ...people];
console.log(guys);

// Object
const exam = { name: "scienec", age: 20 };
const reExam = { ph: 233333, ...exam };
console.log(reExam);

// Set
//! Set will remove the duplicate values and keep only identical values
// ?? we cant use the .length in Set
//?? sets are iterable can use the forEach method on the

const students = ["ram", "sham", "chan", "ram", "gyan"];
console.log(`students: ${students}`);
// create sets
const stud = new Set(students);
// ram is removed bcz its duplicate
console.log("Students in sets", stud);

const otherStu = new Set(["ram", "sham", "chan", "ram", "gyan"]);
console.log(otherStu);

// Add the values to set
const course = new Set();
course.add("science");
course.add("math");
// chaining
course.add("social").add("english").add("math");
console.log(course);

//delete the value form the se
course.delete("math");
console.log(course);

// check the values if its has
console.log(course.has("science"), course.has("Hindi"));

// Check the length of the set can be done with help of Size
console.log(course.size, stud.size);

// Cna iterate through forEach

course.forEach((id) => {
  console.log(id);
});

const empl = new Set([
  { name: "ram", age: 30, ph: 4567 },
  { name: "HOj", age: 23, ph: 566 },
  { name: "TR", age: 45, ph: 78999 },
  { name: "FRdd", age: 67, ph: 666 },
]);

empl.forEach((emp) => console.log(emp.name, emp.age, emp.ph));

// Symbol is used to as unique value
const one = Symbol();
const two = Symbol();
console.log(one, two);

const three = Symbol("three");
console.log(three);

const nin = {};
nin.age = 20;
nin.name = "Houn";
nin[one] = 3666;
nin[two] = "Symbol name";
// In nin one and two are generated as  a unique
console.log(nin);
