/**
 * convert the speed of light from meters/second to centimeters/nanosecond.
 * How fast is light in centimeters/nanosecond?
 */

const speedOfLight = 299792458; //  [m/s]

let centimeters = 100;
let nanosecond = 1e9;
let ConvertedSpeed = speedOfLight * centimeters / nanosecond;

console.log(speedOfLight);
console.log(ConvertedSpeed);
