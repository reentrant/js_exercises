const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                        'September', 'October', 'November', 'December']);
console.log(months.size);
console.log(months.has('September')); // Use the .has() method to check if an item exists in a Set.
console.log(months.values()); // The return value of the .values() method is a SetIterator object.

// Using the SetIterator
const iterator = months.values();
iterator.next();
iterator.next();
iterator.next();


// Using a for...of Loop
for (const month of months){
  console.log(month);
}

// Using the forEach() method:
months.forEach(item => console.log(item))
