console.log(typeof "hello"); // returns "string"
console.log(typeof true); // returns "boolean"
console.log(typeof [1, 2, 3]); // returns "object" (Arrays are a type of object)
console.log(typeof(function hello() { })); // returns "function"


/*
 * Null, Undefined and NaN
 *
 *  null refers to the "value of nothing", while undefined refers to the "absence of value".
 *  What is NaN?
 *  NaN stands for "Not-A-Number"
 */

 var signedIn;
 var absenceOfValue = null;
 console.log(signedIn);
 console.log(absenceOfValue);

/*
 * Equality
 * If you use == and != in situations where the data you’re comparing is mixed,
 * it can lead to some interesting results:
 */
 "1" == 1
// Returns: true

0 == false
//Returns: true

"1" == true
// Returns: true

/*
 * Strict equality
 * When you use the == or != operators, JavaScript first converts each value to the same type
 * (if they’re not already the same type); this is why it's called "type coercion"!
 * This is often not the behavior you want, and it’s actually considered bad practice
 * to use the == and != operators when comparing values for equality.
 * Instead, in JavaScript it’s better to use strict equality to see if numbers, strings,
 * or booleans, etc. are identical in type and value without doing the type conversion first.
 * To perform a strict comparison, simply add an additional equals sign = to the end
 * of the == and != operators.
 */

 "1" === 1
 // Returns: false
 0 === false
 // Returns: false

/*
 * Truthy and Falsy
 * Every value in JavaScript has an inherent boolean value.
 * When that value is evaluated in the context of a boolean expression,
 * the value will be transformed into that inherent boolean value.
 * Here’s the list of all of the falsy values:
 *    the Boolean value false
 *    the null type
 *    the undefined type
 *    the number 0
 *    the empty string ""
 *    the odd value NaN (stands for "not a number")
 */

if ("") {
    console.log("the value is truthy");
} else {
    console.log("the value is falsy");
}
