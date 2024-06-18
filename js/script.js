// Javascript works with or has a set of different values 
// A word or multiple words wrapped in quotes is called a String value type
// A number is called a Number value type

// Primitive Value Types
var firstName = 'JD'; // String
var lastName = 'Tadlock';
var age = 44; // Number
var isADev = true; // Boolean
var un = undefined; // Undefined is a value type that JS will give you when there is no declared or assigned value (Provided By JS)
var n = null; // Programmer's representation of nothing
var notANumber = NaN; // Not A Number - This is provided when you try to process a mathmatical equation and the result is not a valid number (Provided By JS)

var nothing;
var another;
var oneMore;

// console.log(age); // Using a variable within your code is called a reference

// age = age + 1;
// age += 5; // Increase a variable by any numerical amount
age++; // Increase a variable by one

// console.log(age);

age--; // Decrease number by one

// console.log(age);

// age *= 5;

var fullName = firstName + ' ' + lastName;

var names = ['John', 'Ann', 'Bob', 'Frank', 'Jane', 'Jimmy', 'Billy', 'Julie', 'Will']; // Array
var ages = [30, 24, 55, 99];


// names.push('Susan');

// console.log(names);

// names.unshift('Eli');

console.log(names);

// names.pop();
// names.shift();
names.splice(5, 1);

console.log(names);



// console.log(names[names.length - 1]);

// console.log(names);

// names[1] = 'Joe';

// console.log(names);

// ages[2] += 10;

// console.log(ages)

