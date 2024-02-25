const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "463380ff25mshacbd661211d70c5p1b802ajsnbafdcf8f7466",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      wind_speed.innerHTML = response.wind_speed;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});
getWeather("Kathmandu");

const getCommonWeather = (city, elementIdPrefix) => {
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      document.getElementById(`${elementIdPrefix}_cloud_pct`).innerHTML =
        response.cloud_pct;
      document.getElementById(`${elementIdPrefix}_temp`).innerHTML =
        response.temp;
      document.getElementById(`${elementIdPrefix}_feels_like`).innerHTML =
        response.feels_like;
      document.getElementById(`${elementIdPrefix}_humidity`).innerHTML =
        response.humidity;
      document.getElementById(`${elementIdPrefix}_wind_speed`).innerHTML =
        response.wind_speed;
      document.getElementById(`${elementIdPrefix}_min_temp`).innerHTML =
        response.min_temp;
      document.getElementById(`${elementIdPrefix}_max_temp`).innerHTML =
        response.max_temp;
      document.getElementById(`${elementIdPrefix}_wind_degrees`).innerHTML =
        response.wind_degrees;
      document.getElementById(`${elementIdPrefix}_sunrise`).innerHTML =
        response.sunrise;
      document.getElementById(`${elementIdPrefix}_sunset`).innerHTML =
        response.sunset;
    })
    .catch((err) => console.error(err));
};
getCommonWeather("New York City", "nyc");
getCommonWeather("London", "london");
getCommonWeather("Tokyo", "tokyo");
getCommonWeather("Paris", "paris");
getCommonWeather("Beijing", "beijing");
getCommonWeather("Delhi", "delhi");
