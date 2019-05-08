/*
 * In ES6, you can extract data from arrays and objects into distinct variables using destructuring.
 */

const point = [10, 25, -34];

const [x, , z] = point;

console.log(x, , z); // ignores the y coordinate and discards it.

/*
 *  Destructuring values from an object
 */

const gemstone = {
  type: 'quartz',
  color: 'rose',
  carat: 21.29
};

const {type, color, carat} = gemstone;

console.log(type, color, carat);
