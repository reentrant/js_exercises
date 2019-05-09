/*
 * Maps
 * If Sets are similar to Arrays, then Maps are similar to Objects
 */
{
  const employees = new Map();
  console.log(employees);
  // The .set() method takes two arguments. The first argument is the key,
  // which is used to reference the second argument, the value.
  employees.set('james.parkes@udacity.com', {
      firstName: 'James',
      lastName: 'Parkes',
      role: 'Content Developer'
  });
  console.log(employees);

  employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
  });
  console.log(employees);
/*
 *  Working with Maps
 *  After you’ve built your Map, you can use the .has() method to check if a key-value pair exists
 * in your Map by passing it a key.
 */
  console.log(employees.has('Xavier@google.com'));

  // And you can also retrieve values from a Map, by passing a key to the .get() method.
  if (employees.has('richard@udacity.com')){
    console.log(employees.get('richard@udacity.com'));
  }

  // To remove key-value pairs, simply use the .delete() method.
  employees.delete('richard@udacity.com');
  console.log(employees);

  // And use the .clear() method to remove all key-value pairs from the Map.
  employees.clear()
  console.log(employees);
}
