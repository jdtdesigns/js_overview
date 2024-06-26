let count = 10;
const h1 = document.querySelector('h1');

function endGame() {
  alert('Game Over!');
}

const interval = setInterval(function () {
  count--;

  h1.textContent = 'Count: ' + count;

  if (!count) {
    clearInterval(interval);
    endGame();
  }
}, 1 * 1000);

// setTimeout(function () {
//   console.log('time is up!');
// }, 8 * 1000);

// function test() {
//   return 'something'
// }

// const result = test();

// console.log(result);