/*
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */

var text = "audacity";

var udacityizer = function(string) {
  // Right now, the variable string === "audacity"
  // Manipulate string to make it equal to "Udacity"
  // Your code goes here!
  string = string.charAt(1).toUpperCase() + string.slice(2);
  return string;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(text));
