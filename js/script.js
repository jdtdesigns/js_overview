const city = 'atlanta';
const apiKey = '3acc16ffae9e45df92a064e41646355f';
const $currentBtn = $('#current-btn');

function getCurrentWeather(cityName) {
  const currentURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;

  return $.get(currentURL)
}



function outputCurrentWeather(currentData) {
  const $currentOutput = $('.current');

  $currentOutput.html(`
    <h2>Temp: ${currentData.main.temp} &deg;</h2>
  `)

  return currentData.coord;
}


function getForecastReport(locationData) {
  const forecaseURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${locationData.lat}&lon=${locationData.lon}&appid=${apiKey}&units=imperial`;

  return $.get(forecaseURL);
}


function outputForecastReport(forecastData) {
  const $forecastOutput = $('.forecast');
  // Filter out from the 40 weather objects you receive, the 5 noon time weather objects for the next 5 days
  const filtered = forecastData.list.filter(function (weatherObj) {
    if (weatherObj.dt_txt.includes('12')) return true;
  });

  filtered.forEach(function (weatherObj) {
    $forecastOutput.append(`
      <div>
        <h2>${weatherObj.dt_txt}</h2>
        <h3>Temp: ${weatherObj.main.temp}</h3>
        <img src="https://openweathermap.org/img/wn/${weatherObj.weather[0].icon}@2x.png" alt="weather icon image">
      </div>  
    `)
  })
}

$currentBtn.on('click', function () {
  getCurrentWeather(city)
    .then(outputCurrentWeather)
    .then(getForecastReport)
    .then(outputForecastReport);
})
