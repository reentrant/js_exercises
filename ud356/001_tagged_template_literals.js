/*
 * Tagged Template Literals
 * Tagged template literals allow us to use a function to modify the output of a template literal.
 * In this construct:
 * The first argument contains an array of string literals.
 * The subsequently processed arguments are the values of the substitution expressions.
*/
var a = 5;
var b = 10;

function foo(strings, ...values) {
  console.log(strings);
  console.log(values);
    let [a, b] = values;
    console.log(a, b);
    return `Sum ${a + b}
    Product ${a * b}
    Division ${b / a}`;
}

console.log(foo`Num1 ${a + 10} Num2 ${b * 2} Num3 ${b / a} lastLiteral`);


/*
 * Determine the original side lengths and return an array:
 * s = (P +- sqrt(P^2 - 16 * A)) / 4
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
  const [area, perimeter] = expressions;
  let side1 = (perimeter + Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
  let side2 = (perimeter - Math.sqrt(perimeter * perimeter - 16 * area)) / 4;
  return [side1, side2].sort((x,y) => x > y);
}

var s1 = 10;
var s2 = 14;
[s1, s2] = [s1, s2].sort();
const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
