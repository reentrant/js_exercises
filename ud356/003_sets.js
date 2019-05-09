// How to Create a Set
const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
console.log(games);

// Modifying Sets
games.add('Banjo-Tooie');
console.log(games);
games.add('Age of Empires');
console.log(games);

games.delete('Super Mario Bros.');
console.log(games);
console.log(games.size); // Use the .size property to return the number of items in a Set:

games.clear()
console.log(games);
console.log(games.size);
