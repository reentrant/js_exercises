/*
 * Arrow functions
 * ES6 introduces a new kind of function called the arrow function.
 */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10];

let evens = numbers.filter(x => x % 2 == 0);
let squares = numbers.map(x => x * x);

/*
 * Regular functions can be either function declarations or function expressions, however
 * arrow functions are always expressions.
 * In fact, their full name is "arrow function expressions",
 * so they can only be used where an expression is valid. This includes being:
 *  - stored in a variable,
 *  - passed as an argument to a function,
 *  - and stored in an object's property.
 */
const hex = number => `0x${number.toString(16)}`;


// empty parameter list requires parentheses
{
  const sayHi = () => console.log('Hello World!');
  sayHi();
}
// multiple parameters requires parentheses
{
  const orderIceCream = (flavor, cone) => console.log(
    `Here's your ${flavor} ice cream in a ${cone} cone.`);
  orderIceCream('chocolate', 'waffle');
}

numbers.sort(function(x, y) { return x < y; } ); // regular function
console.log(numbers);

numbers.sort((x, y) => x > y);
console.log(numbers);
