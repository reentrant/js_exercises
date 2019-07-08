/**
What happens after running this code?
*/

var mainHeading = document.querySelector("#main");
var otherHeading = document.querySelector('#other');
var excitedText = document.createElement('span');

excitedText.textContent = '!!!';

mainHeading.appendChild(excitedText);
otherHeading.appendChild(excitedText); //only otherHeading has three exclamation marks!

const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';

mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);
