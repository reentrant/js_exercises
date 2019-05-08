/*
 * With regular functions, the value of this is set based on how the function is called.
 * With arrow functions, the value of this is based on the function's surrounding context.
 * In other words, the value of this inside an arrow function is the same as the value of
 * this outside the function.
 */
 // constructor
 function IceCream() {
  this.scoops = 0;
}

{ // Regular Function
  // adds scoop to ice cream
  IceCream.prototype.addScoop = function() {
    const cone = this; // sets `this` to the `cone` variable
    setTimeout(function() {
      cone.scoops++; // references the `cone` variable
      console.log('scoop added!');
      console.log("cone: " + cone.scoops);
      console.log("this: " + this.scoops); // this inside the function is the global object
    }, 0.5);
  };

  const dessert = new IceCream();
  dessert.addScoop();
  console.log("dessert.scoops: " + dessert.scoops);
}

{ // Arrow Functions
  // adds scoop to ice cream
  IceCream.prototype.addScoop = function() {
    setTimeout(() => { // an arrow function is passed to setTimeout
      this.scoops++; // arrow functions inherit their this value from the surrounding context
      console.log('scoop added!');
      console.log("this: " + this.scoops);
    }, 0.5);
  };

  const dessert = new IceCream();
  dessert.addScoop();
  console.log("dessert.scoops: " + dessert.scoops);
}

{
  // adds scoop to ice cream
IceCream.prototype.addScoop = () => { // addScoop is now an arrow function
  setTimeout(() => {
    this.scoops++;
    console.log('scoop added!');
    console.log("this: " + this.scoops);
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();
console.log("dessert.scoops: " + dessert.scoops);
}
