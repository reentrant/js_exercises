/*
 * 1. Using the Map's default iterator:
 * Using both the .keys() and .values() methods on a Map will return a new iterator object
 * called MapIterator.
 */

const members = new Map();

members.set('Albert', 75.68);
members.set('Nikola', 20.16);
members.set('Thomas', 0);
members.set('Marcus', 10.25);

let iteratorObjForKeys = members.keys();
iteratorObjForKeys.next();

let iteratorObjForValues = members.values();
iteratorObjForValues.next();

/*
 * 2. Using a for...of Loop
 */
 for (const member of members) {
    [key, value] = member;
    console.log(key, value);
 }

/*
 * 3. Using a forEach Loop
 */
 members.forEach((value, key) => console.log(key, value));
