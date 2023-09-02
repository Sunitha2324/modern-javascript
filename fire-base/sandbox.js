const list = document.querySelector("ul");
const form = document.querySelector("form");

const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let html = `
    <li data-id="${id}">
      <div>${recipe.title}</div>
      <div><small>${time}</small></div>
      <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
  `;

  list.innerHTML += html;
};

// real-time listener
db.collection("recipies").onSnapshot((snapshot) => {
  console.log(snapshot.docChanges());
  snapshot.docChanges().forEach((change) => {
    const doc = change.doc;
    if (change.type === "added") {
      // console.log(doc);
      addRecipe(doc.data(), doc.id);
    } else if (change.type === "removed") {
      deleteRecipe(doc.id);
    }
  });
});

db.collection("recipies").onSnapshot((snapshot) => {
  snapshot.dochange().forEach((change) => {
    const doc = change.doc;
    if (change.doc === add) {
      addRecipe(doc.data, doc.id);
    }
  });
});

// add documenent
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let now = new Date();
  const recipie = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now),
  };
  console.log(recipie);
  db.collection("recipies")
    .add(recipie)
    .then(() => {
      console.log("recipie added");
    })
    .catch((err) => {
      console.log("recipie error");
    });
});

const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll("li");
  recipes.forEach((recipe) => {
    if (recipe.getAttribute("data-id") === id) {
      recipe.remove();
    }
  });
};

// Delete the recipes
list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.parentElement.getAttribute("data-id");
    db.collection("recipies")
      .doc(id)
      .delete()
      .then(() => {
        console.log("deleted");
      });
  }
});
