let form = document.querySelector("form");
const formData = document.querySelector(".form-data");
const formDataList = document.querySelector(".form-data-list");
const mesage = document.querySelector(".message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // form validation
  const username = /^[a-zA-Z]{6,12}$/;
  if (username.test(form.name.value)) {
    // mesage.textContent = "Please enter a username";
    form.name.setAttribute("class", "sucess");
  } else {
    mesage.textContent = "Enter Valid Username";
    form.name.setAttribute("class", "error");
  }

  formData.innerText = `Form Data: ${form.name.value}, ${form.email.value}`;

  let li = document.createElement("li");
  li.textContent = `Form data: ${form.name.value}, ${form.email.value}`;
  formDataList.append("form data List", li);
});
