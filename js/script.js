const charSelect = document.querySelector('#char-select');
const searchBtn = document.querySelector('#search-btn');

function getCharacters() {
  const baseUrl = 'https://swapi.dev/api';
  const option = charSelect.value;
  const url = `${baseUrl}/${option}`; // https://swapi.dev/api/people

  fetch(url)
    .then(function (resObj) {
      // Pass the parsed json promise object to the next .then in the chain
      return resObj.json();
    })
    // Once the json has been parsed, the callback function below will be called and it will be passed the data from the server
    .then(function (parsedJSONData) {
      const outputDiv = document.querySelector('.output');

      outputDiv.innerHTML = '';

      parsedJSONData.results.forEach(function (char) {
        outputDiv.insertAdjacentHTML('beforeend', `
          <div>
            <h3>${char.name}</h3>
            <p>Birth Year: ${char.birth_year}</p>
          </div>
        `);
      })
    })
    .then(function () {
      console.log('finished');
    })
}

function init() {
  searchBtn.addEventListener('click', getCharacters);
}

init();