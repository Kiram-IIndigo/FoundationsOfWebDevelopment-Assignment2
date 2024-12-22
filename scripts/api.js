const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city-input");
const weatherContainer = document.getElementById("weather");

const apiKey = "INSERT AN API KEY THAT YOU HAVE";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const city = cityInput.value.trim();

  if (city) {
    getWeather(city);
  } else {
    weatherContainer.innerHTML = "<p>Please enter a valid city name.</p>";
  }
});

function getWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  console.log("Fetching weather data from: " + apiUrl);

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        const weatherHtml = `
          <h2>Weather in ${data.name}, ${data.sys.country}</h2>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
        weatherContainer.innerHTML = weatherHtml;
      } else {
        weatherContainer.innerHTML = `<p>City not found. Please try again.</p>`;
      }
    })
    .catch((error) => {
      console.error("Error fetching weather data: ", error);
      weatherContainer.innerHTML = `<p>Error fetching weather data. Please try again later.</p>`;
    });
}
