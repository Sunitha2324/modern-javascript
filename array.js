const score = [10, 20, 50, 60, 54, 54];
const fitlredScore = score.filter((scores) => {
  return scores;
});

const scorecard = document.querySelector(".scoreArray");
// scorecard.textContent = `${fitlredScore}`;

const user = [
  { name: "A", age: 20 },
  { name: "B", age: 90 },
  { name: "V", age: 40 },
  { name: "X", age: 10 },
];

const userFilt = user.filter((scores) => {
  return scores.name;
});

// scorecard.innerText = `${userFilt}`;
// Map method
const userOne = user.map((value) => value.name);
scorecard.innerText = `${userOne}`;

// Find method
const arrayFind = user.find((age) => age.age > 80);
console.log(`arrayFind - ${arrayFind}`);

//Sort method
const useSort = score.sort();
const sortMethod = score.sort((a, b) => b - a);
console.log("useSort", useSort);
console.log("sortMethod", sortMethod);

// Sorting the array in right way
const player = [
  { name: "john", score: 30 },
  { name: "fred", score: 20 },
  { name: "ggh", score: 80 },
  { name: "tuy", score: 10 },
  { name: "tyou", score: 8 },
  { name: "yuoi", score: 45 },
];
player.sort((a, b) => {
  if (a.name > b.name) {
    return -1;
  } else if (a.name < b.name) {
    return 1;
  }
  return 0;
});

// Can sort same if else sorting in shorter way
player.sort((a, b) => b.score - a.score);
console.log("player", player);

const products = [
  { name: "shampoo", price: 20 },
  { name: "Soap", price: 30 },
  { name: "cream", price: 25 },
  { name: "paste", price: 68 },
  { name: "lotion", price: 45 },
];
const filtered = products.filter((product) => product.price > 20);
console.log(`filtered: ${filtered}`);

const promos = filtered.map(
  (product) => ` product is ${product.name} is ${product.price / 2}`
);
console.log(`Promos: ${promos}`);

// Method Chaining
const promoChaining = products
  .filter((prod) => prod.price)
  .map((prod) => ` product is ${prod.name} is ${prod.price / 2}`);
console.log(`promoChaining: ${promoChaining}`);
