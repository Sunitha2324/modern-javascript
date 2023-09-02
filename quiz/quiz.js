const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check the answers
  userAnswers.forEach((answer, index) => {
    console.log(answer, correctAnswers[index]);
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // show the result
  scroll(0, 0); // will scrool to top
  result.classList.remove("d-none");

  //Animation
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

  // window object
  // window.console.log(result); // console.log(result);
  // window.alert(result); // alert(result);
  // window.setTimeout(() => {}, 2000); //setTimeout(()=>{}, 2000)
  // window.scroll(x, y); //scroll(x, y);
});
