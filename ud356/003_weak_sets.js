/*
 * A WeakSet is just like a normal Set with a few key differences:
 * a WeakSet can only contain objects
 * a WeakSet is not iterable which means it can’t be looped over
 * a WeakSet does not have a .clear() method
 */
 let uniqueFlavors = new WeakSet();
 let flavor1 = { flavor: 'chocolate' };
 let flavor2 = { flavor: 'leche quemada' };
 uniqueFlavors.add(flavor1);
 uniqueFlavors.add(flavor2);
 uniqueFlavors.add(flavor1);
 console.log(uniqueFlavors);
