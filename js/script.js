var firstName = 'JD'; // String
var lastName = 'Tadlock';
var age = 44; // Number
var names = ['John', 'Ann', 'Bob', 'Frank', 'Jane', 'Jimmy', 'Billy', 'Julie', 'Will'];

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

// Falsey Values
// 0, null, undefined, '', NaN, false

// Logical Operators - Return a value on either the left side or the right side of the operator
// Which value is equated is based truth (truthy vs falsey)
console.log(0 || null || '' || -5 || undefined); // If anyone of these is true, then perform some action

console.log(1 && age && 100 && null);

console.log(!'');