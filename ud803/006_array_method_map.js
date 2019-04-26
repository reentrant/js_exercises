/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
 function throwZero() {
     throw new Error("Zero Error");
 }

 function throwNegative() {
     throw new Error("Negative Error");
 }

 function isPositive(num) {
   let answer = ""
     if (num > 0) {
         answer = 'YES';
     }
     else if (num == 0) {
         throwZero();
     }
     else {
         throwNegative();
     }
     return answer;
 }


var input = '0 1 2 3 -4'
var nums = input.split(' ').map(Number);

console.log("=== First experiment");
 for (let num of nums){
   try{
     console.log(isPositive(num));
   }
   catch(e){
     console.log(e.message);
   }
 }

console.log("=== Second experiment");
try {
  nums.map(isPositive);
} catch (e) {
  console.log(e.message);
} finally {
}
