// // Grab/Target the h1 element by it's id
const output = document.getElementById('key-output');



function keyPressed(eventObj) {
  // Print the character(word) value of the key that was pressed
  console.log(eventObj.key);

  // Set the text of the h1 to something like 'Enter - 13'
  output.innerText = eventObj.key + ' - ' + eventObj.keyCode;

  // Checks if the enter key was pressed
  if (eventObj.keyCode === 13) {
    console.log(eventObj.key);
    console.log('You have pressed the enter key');
  }
}

document.addEventListener('keydown', keyPressed);

// const data = {
//   name: 'JD',
//   age: 44,
// }

// // data.age = data.age + 1;
// // console.log(data.age);

// // function kitchen(blah, order) {
// //   console.log(blah);
// // }

// // kitchen('medium steak', 10);

// const str = 'some string';

// console.log(str.length);