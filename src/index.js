function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
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
