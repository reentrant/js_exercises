/**
What happens after running this code?
Explanation:
If an element already exists in the DOM and this element is passed to .appendChild(),
the parent.appendChild() method will move it rather than duplicating it
*/

var mainHeading = document.querySelector("#main");
var otherHeading = document.querySelector('#other');
var excitedText = document.createElement('span');

excitedText.textContent = '!!!';
mainHeading.appendChild(excitedText);
otherHeading.appendChild(excitedText); //only otherHeading has three exclamation marks!

const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';

mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);
