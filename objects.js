let user = {
  name: "Shan",
  age: 20,
  email: "shan@gmail.com",
  blog: ["shan technology", "pasion technology", "elevisions", "cities"],
  // Regular functio  defining inside the opbject
  // ! dont use the arrow function inside the object function wn we use arrow function 'this' keyword ll refrer to the window object so better to write the normal function when we not writting any logic then can use the arrow function

  //! inside arrow function 'this' keyword ll refrer to the window object so not to use this inside arrow function
  login: function () {
    console.log("Login to system");
  },
  logout: function () {
    console.log("Logout from system");
  },
  logBlog: function () {
    this.blog.forEach((element) => console.log("element: " + element));
  },
};

// array with objects
let likesBlogs = [
  { title: "Techinical blog", likes: 50 },
  { title: "Study blog", likes: 30 },
  { title: "Research blog", likes: 80 },
];

let printLikes = () =>
  likesBlogs.forEach((likes) =>
    console.log("Print likes", likes.title + " " + likes.likes)
  );

printLikes();

let ul = document.querySelector(".print-likes");
console.log("Selctor.....", ul);
let html = ``;
likesBlogs.forEach((likes) => {
  html += `<div>${likes.title} : ${likes.likes} </div>`;
});
ul.innerHTML = html;

user.login();
user.logout();
user.logBlog();

const logBlog = () => {
  user.blog.forEach((blog) => console.log("blogs", blog));
};

logBlog();
// .notation
console.log("blog", user.blog); // Shan
user.name = "Ram sham";
console.log(user.name); // Ram sham

// Bracket notation important to use '' inside []
console.log(user["name"]); // Ram sham
user.name = "Kelen";
console.log(user["name"]); //

let key = "blog";
console.log(user[key]); //

let keyone = "email";
console.log(user[keyone]); //
console.log(typeof user.age);
