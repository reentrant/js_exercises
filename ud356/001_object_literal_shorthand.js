/*
 *  In ES6, we can remove those duplicate variables names from object properties _if_ the properties
 *  have the same name as the variables being assigned to them:
 */

let type = 'quartz';
let color = 'rose';
let carat = 21.29;

let gemstone = {
  type,
  color,
  carat,
  calculateWorth() {} // Shorthand method names: Since you only need to reference the gemstone’s
                      // calculateWorth property in order to call the function,
                      // having the function keyword is redundant, so it can be dropped.
};

console.log(gemstone);
