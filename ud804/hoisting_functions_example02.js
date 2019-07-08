/*
 * Function Expression: When a function is stored inside a variable.
 *                      Function expressions are not hoisted, since they involve
 *                      variable assignment, and only variable declarations are hoisted.
 */
example2();
var example2 = function() {
    console.log("Ran the example");
}


/*
Example 2 Interpreted
var example2;
example2(); >>Uncaught TypeError: example2 is not a function at <anonymous>:6:1
example2 = function() {
    console.log("Ran the example");
}
*/
