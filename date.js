const now = new Date();
console.log("Now", now);

console.log("getFullYear", now.getFullYear());
console.log("getMonth", now.getMonth());
console.log("getDay", now.getDay());
console.log("getHours", now.getHours());
console.log("getMinutes", now.getMinutes());
console.log("getSeconds", now.getSeconds());

// Timestamp
console.log("getTimestamp", now.getTime());

// Date string
console.log("Date string:", now.toDateString());
console.log("Time string:", now.toTimeString());
console.log("Local string:", now.toLocaleDateString());

let before = new Date("august 10 2023 10:20:60");
console.log("Before:", before);

const diff = now.getTime() - before.getTime();
console.log("Diff:", diff);

const mins = Math.round(diff / 1000 / 60);
console.log("mins:", mins);
const hours = Math.round(mins / 60);
const day = Math.round(hours / 24);

console.log(`Days:", ${day}`);

const timeStamp = 1692459762794;

console.log("timeStamp:", new Date(timeStamp));
