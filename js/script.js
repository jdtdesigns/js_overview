const $charSelect = $('#char-select');
const $searchBtn = $('#search-btn');

function getCharacters() {
  const baseUrl = 'https://swapi.dev/api';
  const option = $charSelect.val();
  const url = `${baseUrl}/${option}`; // https://swapi.dev/api/people

  $.get(url)
    // Once the json has been parsed, the callback function below will be called and it will be passed the data from the server
    .then(function (data) {
      const $outputDiv = $('.output');

      $outputDiv.empty();

      data.results.forEach(function (char) {
        $outputDiv.append(`
          <div>
            <h3>${char.name}</h3>
            <p>Birth Year: ${char.birth_year}</p>
          </div>
        `);
      })
    })
}

function init() {
  $searchBtn.on('click', getCharacters);
}

init();