let count = 5;
const h1 = document.querySelector('h1');
const modal = document.querySelector('.modal');

function endGame() {
  modal.classList.remove('hide');
}

const interval = setInterval(function () {
  count--;

  h1.textContent = 'Count: ' + count;

  if (!count) {
    clearInterval(interval);
    endGame();
  }
}, 1 * 1000);

function closeModal() {
  modal.classList.add('hide');
  console.log('body clicked');
}

document.body.addEventListener('click', closeModal);


const outerBox = document.querySelector('.outer');

outerBox.addEventListener('click', function (eventObj) {
  eventObj.stopPropagation();

  console.log('outer clicked!');
});

// setTimeout(function () {
//   console.log('time is up!');
// }, 8 * 1000);

// function test() {
//   return 'something'
// }

// const result = test();

// console.log(result);