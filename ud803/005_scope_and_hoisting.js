/*
 * Scope
 * Global scope: Identifiers can be accessed everywhere within your program.
 * Function scope: Identifiers can be accessed everywhere inside the function it was defined in.
 *                 (even in functions declared inside the function).
 *
 * Scope Overriding or Shadowing
 *
 */
var bookTitle = "Le Petit Prince";
console.log(bookTitle);

function displayBookSpanish(){
  bookTitle = "El Principito";
  console.log(bookTitle);
}

displayBookSpanish();
console.log(bookTitle);

/*
 * Hoisting: JavaScript hoists function declarations and variable declarations to the top of the
 *           current scope.
 *           It means that before any JavaScript code is executed, all function declarations are
 *           "hoisted" to the top of their currrent scope.
 *
 * Good Practice: Declare functions at the top of the script and variables at the top of the
 * functions. So the way the code looks and the way the code behaves are consistent with each other.
 *
 */

 sum(1, 2);

 function sum(x, y){
   return x + y;
 }

/*
 * Hoisting also happens with variable declarations. It means that when the code gets interpreted,
 * the variable declarations are moved to the top of the function scope.
 * But the definition remains where it is.
 */

 sayHi();

function sayHi() {
  console.log(greeting);
  var greeting = "Hi";  // Variable assignments are not hoisted.

}

// Output: > undefined.
// It happens because the variable declaration is getting hoisted to the top
// but it is not initilized. And then wehn we print it, it displays undefined.
