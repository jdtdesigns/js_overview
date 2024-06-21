const gatherBtn = document.querySelector('#gather-btn');

// When the page loads, show a button that the user clicks
// When the button is clicked, show a prompt for first name, last name and age
// Store the 3 values to an object
// Print the data object values to the browser window
function gatherInfo() {
  const users = [];

  let firstName, lastName, age;
  let addUser = true;

  while (addUser) {

    if (!firstName || firstName.length < 2) {
      firstName = prompt('Please enter your first name');
      continue;
    }

    if (!lastName) {
      lastName = prompt('Please enter your last name');
      continue;
    }

    if (!age || isNaN(age)) {
      age = +prompt('Please enter your age');
      continue;
    }

    const user = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };

    users.push(user);

    firstName = '';
    lastName = '';
    age = 0;

    addUser = confirm('Would you like to add another user?');
  }

  return users;
}

const info = gatherInfo();

console.log(info);

gatherBtn.addEventListener('click', gatherInfo);

// console.log(isNaN('asdldfkj'))