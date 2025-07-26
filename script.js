function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  if (!city) {
    alert('Please enter a city name');
    return;
  }

  fetch(`weather.php?city=${encodeURIComponent(city)}`)
    .then(response => response.json())
    .then(data => {
      const result = document.getElementById('weatherResult');
      if (data.cod === 200) {
        result.innerHTML = `
          <h3>${data.name}, ${data.sys.country}</h3>
          <p>🌡️ Temperature: ${data.main.temp} °C</p>
          <p>💧 Humidity: ${data.main.humidity}%</p>
          <p>🌥️ Weather: ${data.weather[0].description}</p>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Icon">
        `;
      } else {
        result.innerHTML = `<p style="color:red;">${data.message}</p>`;
      }
    })
    .catch(() => {
      document.getElementById('weatherResult').innerHTML = `<p style="color:red;">Failed to fetch data. Try again.</p>`;
    });
}
