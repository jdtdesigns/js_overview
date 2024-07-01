
const apiKey = '3acc16ffae9e45df92a064e41646355f';

const url = `https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=${apiKey}&units=imperial`;


// We make a fetch(server-side) request to openweathermap for current weather data
// The url must match the server's criteria for a request
fetch(url)
  // The first then callback function will be put to the side until the server responds back
  .then(function (responseObj) {
    // Passing the parsed json promise object to the next then
    return responseObj.json();
  })
  .then(function (data) {
    console.log(data);
    const html = `
    <h2>Temp: ${data.main.temp}</h2>
    `;
    const outputDiv = document.querySelector('.output');

    outputDiv.innerHTML = html;
  })
  .catch(function (error) {
    console.log(error);
  });




// fetch(url)
//   .then(function (responseObj) {
//     const dataPromise = responseObj.json();

//     dataPromise.then(function (data) {
//       console.log(data);
//     });
//   })
//   .catch(function (error) {
//     console.log(error);
//   });