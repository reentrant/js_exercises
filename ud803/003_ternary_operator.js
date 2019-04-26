/*
 * Ternary operator
 * The ternary operator provides you with a shortcut alternative for writing lengthy
 * if...else statements:
 *
 * conditional ? (if condition is true) : (if condition is false)
 */

var isGoing = true;
if (isGoing === true){
  color = "green";
} else {
  color = "red";
}

var color = isGoing ? "green" : "red";
console.log(color);
