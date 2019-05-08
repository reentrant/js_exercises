/*
 * Prior to ES6, the old way to concatenate strings together was by using the string concatenation
 * operator ( + ).
 * As an alternative to using the string concatenation operator ( + ), you can use the String's
 * concat() method, but both options are rather clunky for simulating true string interpolation.
 */
 const student = {
   name: 'Richard Kalehoff',
   guardian: 'Mr. Kalehoff'
 };

 const teacher = {
   name: 'Mrs. Wilson',
   room: 'N231'
 }
 let message = student.name + ',\n Please see ' + teacher.name + ' in ' + teacher.room +
 ' to pick up your report card.';
 console.log(message);
/*
* Template Literals
* Template literals are essentially string literals that include embedded expressions.
* Denoted with backticks (` `) template literals can contain placeholders which are represented
* using ${expression}.
* Template literals also preserve newlines as part of the string!
*/

 message =  `${student.name},
  Please see ${teacher.name} in ${teacher.room} to pick up your report card.`;
 console.log(message);

 /*
  * Quiz: Build an HTML Fragment (1-2)
  */

 const cheetah = {
     name: 'Cheetah',
     scientificName: 'Acinonyx jubatus',
     lifespan: '10-12 years',
     speed: '68-75 mph',
     diet: 'carnivore',
     summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
     fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
 };

 // creates an animal trading card
 function createAnimalTradingCardHTML(animal) {
     const cardHTML = `<div class="card">
         <h3 class="name"> ${animal.name} </h3>
         <img src=" ${animal.name}.jpg" alt=" ${animal.name}" class="picture">
         <div class="description">
             <p class="fact"> ${animal.fact} </p>
             <ul class="details">
                 <li><span class="bold">Scientific Name</span>: ${animal.scientificName}</li>
                 <li><span class="bold">Average Lifespan</span>: ${animal.lifespan}</li>
                 <li><span class="bold">Average Speed</span>: ${animal.speed}</li>
                 <li><span class="bold">Diet</span>: ${animal.diet}</li>
             </ul>
             <p class="brief">${animal.summary}</p>
         </div>
     </div>`;

     return cardHTML;
 }

 console.log(createAnimalTradingCardHTML(cheetah));
