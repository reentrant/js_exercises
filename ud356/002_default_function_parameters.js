{// Before
  function greet(name, greeting) {
    name = (typeof name !== 'undefined') ?  name : 'Student';
    greeting = (typeof greeting !== 'undefined') ?  greeting : 'Welcome';

    return `${greeting} ${name}!`;
  }

  console.log(greet());  // Welcome Student!
  console.log(greet('James'));  // Welcome James!
  console.log(greet('Richard', 'Howdy'));  // Howdy Richard!
}
/*
 * ES6 has introduced a new way to create defaults. It's called default function parameters.
 */
{
  function greet(name = 'Student', greeting = 'Welcome') {
  return `${greeting} ${name}!`;
  }
  console.log(greet());  // Welcome Student!
  console.log(greet('James'));  // Welcome James!
  console.log(greet('Richard', 'Howdy'));  // Howdy Richard!
}
