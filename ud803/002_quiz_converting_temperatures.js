/*
 * Programming Quiz: Converting Tempatures (2-2)
 *
 * The Celsius-to-Fahrenheit formula:
 *
 *    F = C x 1.8 + 32
 *
 * 1. Set the fahrenheit variable to the correct value using the celsius variable and the
 *    formula above.
 * 2. Log the fahrenheit variable to the console.
 *
 */

function celsiusToFahrenheit(celsius){
    return celsius * 1.8 + 32
}

var celsius = 12;
var fahrenheit = celsiusToFahrenheit(celsius)


console.log(celsius + " degrees Celsius equals to " + fahrenheit + "degrees Fahrenheit.");
