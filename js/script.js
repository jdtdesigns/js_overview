

// Comparison Operators - Return a boolean based on the result of your comparison
// console.log(age > 30);
// console.log(age < 30);
// console.log(age == 44);
// console.log(age == '44'); // Double equals checks only value
// console.log(age === 44); // Triple equals checks both value and type

// console.log(age >= 40);
// console.log(age <= 40);

// console.log(age != 43);
// console.log(age !== 43);



// Logical Operators - Return a value on either the left side or the right side of the operator
// Which value is equated is based truth (truthy vs falsey)
// console.log(0 || null || '' || -5 || undefined); // If anyone of these is true, then perform some action

// console.log(1 && age && 100 && null);

// console.log(!'');

// var str = '';
// var num = 3234;
// var n = null;
// var un = undefined;
// var bool = false; // true
// var a = 10;
// var b = '10';

// Falsey Values
// 0, null, undefined, '', NaN, false

var firstName = 'JD'; // String
var lastName = 'Tadlock';
var age = 44; // Number
var names = ['John', 'Ann', 'Bob', 'Frank', 'Jane', 'Jimmy', 'Billy', 'Julie', 'Will'];
var oldEnough = age >= 21; // true

// If Conditionals - Trigger if the VALUE you pass into the parentheses is a truthy value
if (firstName && lastName) {
  console.log('Receieved your full name!');
} else if (!firstName) {
  console.log('You must provide your first name!');
}
else if (!lastName) {
  console.log('You must provide your last name!');
}
else {
  console.log('You must provide your full name!');
}

if (oldEnough) {
  console.log('Welcome');
  // Web API - Browser Toolset that we can access from within our JS
  alert('Welcome ' + firstName);
} else {
  console.log('Must be old enough to enter');
  alert('No chance...');
}
