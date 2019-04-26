/*
 * 1. Using Object Initializers
 * We can initialize an object using new Object(), Object.create(), or by using the literal
 * (or initializer) notation.
 * An object initializer is a comma-separated list of zero or more property name-value pairs
 * defining an object, enclosed in curly braces (i.e., {}).
 */

 var a = 3;
 var b = 'Rome';
 var c = false;

 var p = {};
 console.log('Object \'p\' (Initial):', p);
 p.a = a;
 p.b = b;
 p.c = c;
 console.log('Object \'p\' (Updated):', q);

/*
 * Using new Object()
 */

var q = new Object();
 console.log('Object \'q\' (Initial):', q);
q.a = 4;
q.b = 'Rome';
q.c = true;

console.log('Object \'q\':', q);

/*
 * Using Object.create()
 */

var x = {
    a: 5,
    foo: function() {
        return this.a * this.a;
    }
};
console.log('\'x\':', x);

var o = Object.create(x);
console.log('Object \'o\':', o);

console.log('Property \'o.a\':', o.a);
console.log('Method \'o.foo()\':', o.foo());

o.a = 7;

console.log('Property \'o.a\':', o.a);
console.log('Method \'o.foo()\':', o.foo());


/*
 * 2. Using a Constructor Function
 * We can use a constructor function to create an object in two steps:
 *
 * 1) Define the object type by writing a constructor function.
 *    The strong convention here is for the function's name to be in UpperCamelCase.
 * 2) Use the new operator to create an instance of the object.
 */

 function Rectangle(a, b) {
   this.length = a;
   this.width = b;
   this.perimeter = 2 * (a + b);
   this.area = a * b;
 }

 let rectangle = new Rectangle(4, 5);

     console.log('Property \'rectangle.length\':', rectangle.length);
     console.log('Property \'rectangle.width\':', rectangle.width);
     console.log('Property \'rectangle.perimeter\':', rectangle.perimeter);
     console.log('Property \'rectangle.area\':', rectangle.area);
