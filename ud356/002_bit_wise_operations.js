/* S = { 1, ... n}
 * We want to know the maximum bitwise AND value of any two integers, a and b (where a < b ),
 * in sequence S  that is also less than a given integer, k.
 */

 function getMaxLessThanK(n, k) {
     let max = 0;
     for (let i = 1; i < n; i++)
      for (let j = i + 1; j < n + 1; j++){
        if ((i & j) < k && (i & j) > max) {
                 max = i & j;
        }
        console.log(i, j, i & j);
      }
     return max;
 }

console.log(getMaxLessThanK(5, 4));
//console.log(getMaxLessThanK(712, 704));
