
/* 
Create a function that takes 3 arguments 
- The first and second argument will be a number
- The third argument will be an mathmatical operator (+, -, *, /)

Example: If the operator is a '+' then you will add the two numbers together and console log the sum
*/
function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return 'You must provide a valid operator';
  }
}

// Call your function 4 times with different numbers and operators to confirm that it is working correctly
const sum = calculate(10, 20, '+');
console.log(sum);

// calculate(7, 89, '-');
// calculate(25, 50, '*');
// calculate(9, 3, '/');
// calculate(9, 3, '&&&&&');
// return is the function's answer
// function add(num1, num2) {
//   return 'another';
// }

// const answer = add();

// console.log(answer);
// add(5, 10);

// console.log('something after our function call');


// if (operator === '+') {
//   console.log(num1 + num2);
// } else if (operator === '-') {
//   console.log(num1 - num2);
// } else if (operator === '*') {
//   console.log(num1 * num2);
// } else if (operator === '/') {
//   console.log(num1 / num2);
// } else {
//   console.log('You must provide a valid operator')
// }
