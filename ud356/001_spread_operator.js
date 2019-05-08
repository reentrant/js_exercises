/*
 * Spread operator
 * The spread operator, written with three consecutive dots ( ... ), is new in ES6 and gives you
 * the ability to expand, or spread, iterable objects into multiple elements.
 */
{
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
  console.log(...primes);
}


/*
 * Concatenating arrays
 */
 const fruits = ["apples", "bananas", "pears"];
 const vegetables = ["corn", "potatoes", "carrots"];

{
// prior to the spread operator, you were forced to use the Array’s concat() method.
const produce = fruits.concat(vegetables);
console.log(produce);
}
// How about trying the spread operator?
{
const produce = [...fruits, ...vegetables];
console.log(produce);
}
