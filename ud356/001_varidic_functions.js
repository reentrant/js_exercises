/*
 * The rest parameter, also written with three consecutive dots ( ... ), allows you to represent an
 * indefinite number of elements as an array.
 */
 {
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, items);
 }

/*
 * You can think of the rest parameter like the opposite of the spread operator;
 * if the spread operator is like unboxing all of the contents of a package,
 * then the rest parameter is like taking all the contents and putting them back into the package.
 */
function printPagckageContents(...items){
  console.log(items);
  for (const item of items){
    console.log(item);
  }
}
printPagckageContents('cheese', 'eggs', 'milk', 'bread');


/*
 * Variadic functions
 * Another use case for the rest parameter is when you’re working with variadic functions.
 * Variadic functions are functions that take an indefinite number of arguments.
 */
// There’s literally an endless number of ways the sum() function could be called.
 sum(1, 2);
 sum(10, 36, 7, 84, 90, 110);
// In previous versions of JavaScript
// Using the arguments object
// The arguments object is an array-like object that is available as a local variable inside all
// functions.
function sum() {
  let total = 0;
  console.log(arguments);
  for(const argument of arguments) {
    total += argument;
  }
  return total;
}

// Using the rest parameter
function sum(...nums) {
  let total = 0;
  for(const num of nums) {
    total += num;
  }
  return total;
}

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */
class Polygon {
    constructor(...sides) {
        this.sides = sides;
    }

    perimeter() {
        let sum = 0;
        for (let side of this.sides) {
            sum += side;
        }
        return sum;
    }
}

const rectangle = new Polygon(10, 20, 10, 20);
const square = new Polygon(10, 10, 10, 10);
const pentagon = new Polygon(10, 20, 30, 40, 43);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
