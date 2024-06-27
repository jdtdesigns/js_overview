const ul = document.querySelector('ul');
const output = document.querySelector('#output');
const addBtn = document.querySelector('#add');

function doSomething(eventObj) {
  const el = eventObj.target;

  if (el.tagName === 'LI') {
    output.innerText = el.innerText;
    // lis.forEach(function (li) {
    //   li.style.background = '#555';
    // });

    eventObj.target.style.background = 'red';
  }
}

function addListItem() {
  const li = document.createElement('li'); // <li></li>

  li.innerText = 'New Item';

  ul.append(li);
}

ul.addEventListener('click', doSomething);
addBtn.addEventListener('click', addListItem);

// const fruits = ['orange', 'apple', 'grape'];

// fruits.forEach(function (li, index) {
//   console.log(li, index);
// })

// const data = {
//   name: 'JD',
//   age: 44,
//   info: {
//     address: '555 coding st'
//   }
// }