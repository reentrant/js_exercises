/*
 * Function declaration: The function keyword has a name.
 *
 * Parameters vs. Arguments
 * At first, it can be a bit tricky to know when something is either a parameter or an argument.
 * The key difference is in where they show up in the code:
 *  A parameter is always going to be a variable name and appears in the function declaration.
 * On the other hand, an argument is always going to be a value (i.e. any of the JavaScript data
 * types - a number, a string, a boolean, etc.) and will always appear in the code when the function
 * is called or invoked.
 */

function reverseArray(s){
  let reversMe;
  try {
      if (typeof(s) == 'string'){
        let array = s.split('');
        reverseMe = array.reverse().join('');

      }
      else{
        reverseMe = s.reverse();
      }
      return reverseMe;
    }
    catch (e) {
        console.log(e.message);
        console.log(s);
    }

}

/*
 * Returning
 * If you don't explicitly define a return value, the function will return undefined by default.
 */
console.log(reverseArray("Julián"));
console.log(reverseArray([1, 2, 3, 4, 5]));
