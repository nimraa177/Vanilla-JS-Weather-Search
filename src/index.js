function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
  let windElement = document.querySelector("#wind-speed");
  windElement.innerHTML = response.data.wind.speed;
  let timeElement = document.querySelector("#time");
  //Parsing the date Sun Mar 17 2024 23:01:02 GMT-0500
  let date = new Date(response.data.time * 1000);
  timeElement.innerHTML = response.data.time;
  //Sun Mar 17 2024 23:01:02 GMT-0500
  timeElement.innerHTML = formatDate(date);

  console.log(response.data);
}
//Function to format date
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

//function for search city
function searchCity(city) {
  //call API and update UI
  let apiKey = "0c309aff29364454354a4b94ab9ot995";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  console.log(apiUrl);
  axios.get(apiUrl).then(refreshWeather); //get the data and call function
}

//creation of handleSearchSubmit function
function handleSearchSubmit(event) {
  event.preventDefault();
  //value added in search saved in variable
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit); //on submit call handleSearchSubmit function
//when page will load it will automatically call API
searchCity("Islamabad");
