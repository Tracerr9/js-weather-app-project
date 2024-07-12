// get weather data



document.getElementById('submitButton').addEventListener('click', () => {
  const apiKey = '8e9ee0c614a34c81a95103757241207';
  const city = document.getElementById('cityName').value;
  const encodedCity = encodeURIComponent(city)

  const apiUrl =`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodedCity}&aqi=no`;
  getWeather(apiUrl)
})


function getWeather(apiUrl) {
  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Process and display the weather data
    displayWeather(data)
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
}

function displayWeather(data) {
  let html = '';
  html = 
  `<h2>
  ${data.location.name} - ${data.location.country}
  </h2>
  <img class="condition-img" src='${data.current.condition.icon}'>
  ${data.current.condition.text} 
  <div class="temp">
  <img src="thermometer-icon.png"> ${data.current.temp_c} &deg;C
  </div>
  `

  document.getElementById('weather-info').innerHTML = html

}
