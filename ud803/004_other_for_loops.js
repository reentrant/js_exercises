/*
 * Objective
 * In this challenge, we practice looping over the characters of string.
 * Task
 * Complete the vowelsAndConsonants function in the editor below.
 * It has one parameter, a string, , consisting of lowercase English alphabetic letters.
 * The function must do the following:
 *  1. First, print each vowel in  on a new line.
 *  2. Second, print each consonant in  on a new line in the same order as it appeared in.
 */

function printChar(char){
  console.log(char);
}

 function vowelsAndConsonants(string) {
   var vowels = [];
   var nonVowels = [];
    for (let char of string){
      'aeiou'.includes(char) ? vowels.push(char) : nonVowels.push(char);
    }

    vowels.forEach(printChar);
    nonVowels.forEach(printChar);
 }

 vowelsAndConsonants('javascriptloops');
