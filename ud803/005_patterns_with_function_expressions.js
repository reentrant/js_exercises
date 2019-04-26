/*
 * Function Expression: When a function is stored inside a variable.
 *                      Function expressions are not hoisted, since they involve
 *                      variable assignment, and only variable declarations are hoisted.
 */

 var sayHello = function(){ // Anonymous function: The function keyword no longer has a name.
   return "Hello";
 }

 sayHello();

/*
 * Patterns with Function Expressions:
 * 1. Functions as parameters: A function that is passed into another function is called a callback.
 */

 var laugh = function(times){
   var laughing = '';
   for (let i = 0; i < times; i++){
     laughing += 'ha';
   }
   return laughing;
 }

 function greetAndScream(callBackFunction){
   return "LOL: " + callBackFunction(3) + "!";
 }

 greetAndScream(laugh);

 /*
  * Patterns with Function Expressions:
  * 2. Named function expressions
  */

var favoriteMovie = function movie(){
  return "Rocky";
}

favoriteMovie();

/*
 * Patterns with Function Expressions:
 * 3. Inline Function Expressions
 */
function practiceInlineFunctions(InlineFunctionExpression, parameter){
  InlineFunctionExpression(parameter);
}

practiceInlineFunctions(function(question){  // Anonymous inline function expressions
  console.log(question);
}, "What is your favorite movie?");
