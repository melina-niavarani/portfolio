// let celsius = true;
let apiKey = "1bcc332eb77d8d56d5fa9270a4adc3a2";
let showSearchInput = false;
let form = document.querySelector("#search-form");
let searchBtn = document.querySelector("#search-btn");
let h1 = document.querySelector("h1");
let currentTemp = document.querySelector("#temperature");
let description = document.querySelector("#description");
let highTemp = document.querySelector("#high");
let lowTemp = document.querySelector("#low");
let currentLoc = document.querySelector("#current-location");
let todayTemp = document.querySelector("#todayTemp");
let firstDay = document.querySelector("#firstDay");
let firstDayTemp = document.querySelector("#firstDayTemp");
let secondDay = document.querySelector("#secondDay");
let secondDayTemp = document.querySelector("#secondDayTemp");
let thirdDay = document.querySelector("#thirdDay");
let thirdDayTemp = document.querySelector("#thirdDayTemp");
let fourthDay = document.querySelector("#fourthDay");
let fourthDayTemp = document.querySelector("#fourthDayTemp");
let fifthDay = document.querySelector("#fifthDay");
let fifthDayTemp = document.querySelector("#fifthDayTemp");

let icon1 = document.querySelector("#icon1");
let icon2 = document.querySelector("#icon2");
let icon3 = document.querySelector("#icon3");
let icon4 = document.querySelector("#icon4");
let icon5 = document.querySelector("#icon5");
let icon6 = document.querySelector("#icon6");


let days = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

let now = new Date();
firstDay.innerHTML = days[now.getDay() + 1];
secondDay.innerHTML = days[now.getDay() + 2];
thirdDay.innerHTML = days[now.getDay() + 3];
fourthDay.innerHTML = days[now.getDay() + 4];
fifthDay.innerHTML = days[now.getDay() + 5];

searchBtn.addEventListener("click", function () {
  showSearchInput = !showSearchInput;
  if (showSearchInput) {
    form.innerHTML = `<input id="search-area" class="border border-4 border-dark-subtle rounded-pill placeholder-sm p-2 mb-2 w-75" type="search"  placeholder="Search">`;
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      let searchInput = document.querySelector("#search-area");
      h1.innerHTML =
        searchInput.value.charAt(0).toUpperCase() + searchInput.value.slice(1);
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${h1.innerHTML}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(importWeather);
    });
  }
});

function fiveDayForecast(response) {
  firstDayTemp.innerHTML = `${Math.floor(response.data.list[0].main.temp)}°C`;
  secondDayTemp.innerHTML = `${Math.floor(response.data.list[1].main.temp)}°C`;
  thirdDayTemp.innerHTML = `${Math.floor(response.data.list[2].main.temp)}°C`;
  fourthDayTemp.innerHTML = `${Math.floor(response.data.list[3].main.temp)}°C`;
  fifthDayTemp.innerHTML = `${Math.floor(response.data.list[4].main.temp)}°C`;
  icon2.setAttribute(
    "src",
     `https://openweathermap.org/img/wn/${response.data.list[0].weather[0].icon}@2x.png`
  )
  icon3.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.list[1].weather[0].icon}@2x.png`
  );
  icon4.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.list[2].weather[0].icon}@2x.png`
  );
  icon5.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.list[3].weather[0].icon}@2x.png`
  );
  icon6.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.list[4].weather[0].icon}@2x.png`
  );
}


function importWeather(response) {
  currentTemp.innerHTML = `${Math.floor(response.data.main.temp)}°C`;
  description.innerHTML = response.data.weather[0].description;
  highTemp.innerHTML = `H: ${Math.floor(response.data.main.temp_max)}`;
  lowTemp.innerHTML = `L: ${Math.floor(response.data.main.temp_min)}`;
  todayTemp.innerHTML = `${Math.floor(response.data.main.temp)}°C`;
  icon1.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  )
  let daysApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${h1.innerHTML}&appid=${apiKey}&units=metric`;
  axios.get(daysApiUrl).then(fiveDayForecast);
}

function importWeatherByLoc(response){
  h1.innerText = response.data.name;
  currentTemp.innerHTML = `${Math.floor(response.data.main.temp)}°C`;
  description.innerHTML = response.data.weather[0].description;
  highTemp.innerHTML = `H: ${Math.floor(response.data.main.temp_max)}`;
  lowTemp.innerHTML = `L: ${Math.floor(response.data.main.temp_min)}`;
  todayTemp.innerHTML = `${Math.floor(response.data.main.temp)}°C`;
  icon1.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  )
}

function currentLocation(location) {
  let lat = location.coords.latitude;
  let long = location.coords.longitude;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(importWeatherByLoc);

  let daysApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
  axios.get(daysApiUrl).then(fiveDayForecast);
}

function changeToCurrent() {
  navigator.geolocation.getCurrentPosition(currentLocation);
}

currentLoc.addEventListener("click", changeToCurrent);

// function changeTempType() {
//   if (!celsius) {
//     let fahrenheitTemperature = Math.round((weather[h1.innerHTML].temp * 9) / 5 + 32)
//     currentTemp.innerHTML = `${fahrenheitTemperature}°F`;
//   }else {
//     currentTemp.innerHTML = `${weather[h1.innerHTML].temp}°C`
//   }
// }

// currentTemp.addEventListener('click', function(event){
//   event.preventDefault()
//   celsius = !celsius
//   changeTempType()
// })
