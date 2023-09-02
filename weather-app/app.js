const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
console.log(icon);

const updateUI = (data) => {
  console.log(data);
  // const cityDetails = data.cityDetails;
  // const weather = data.weather;
  // Destructing the the above one
  const { cityDetails, weather } = data;
  details.innerHTML = `
     <div class="text-muted text-uppercase text-center details">
          <h5 class="my-3">${cityDetails.EnglishName}</h5>
          <div class="my-3">${weather.WeatherText}</div>
          <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
          </div>
        </div>
    `;
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
  let timeSrc = null;
  //   if (weather.IsDayTime) {
  //     timeSrc = "img/day.svg";
  //   } else {
  //     timeSrc = "img/night.svg";
  //     }

  timeSrc = weather.IsDayTime ? "img/day.svg" : "img/night.svg";
  time.setAttribute("src", timeSrc);

  let iconSrc = null;
  //   if (weather.WeatherIcon) {
  //     iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  //     console.log(iconSrc);
  //   }

  // Destructuring above one
  iconSrc = weather.WeatherIcon && `img/icons/${weather.WeatherIcon}.svg`;

  icon.setAttribute("src", iconSrc);
};

const updateCity = async (city) => {
  const cityDetails = await getCity(city);
  const weather = await getWeather(cityDetails.Key);
  return {
    // citydet: cityDetails,
    // weather: weather,
    // Destructed the above one
    cityDetails,
    weather,
  };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formDetails = cityForm.city.value.trim();
  //   console.log("formDetails", formDetails);
  cityForm.reset();
  updateCity(formDetails)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => console.log("error", err));

  //Local storage set
  localStorage.setItem("city", formDetails);
});

//access local storage
// if(localStorage.city)
if (localStorage.getItem("city")) {
  updateCity(localStorage.getItem("city"))
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => console.log("error", err));
}
