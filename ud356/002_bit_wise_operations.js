/* S = { 1, ... n}
 * We want to know the maximum bitwise AND value of any two integers, a and b (where a < b ),
 * in sequence S  that is also less than a given integer, k.
 */

 function getMaxLessThanK(n, k) {
     var and_result;
     let max = 0;
     let m = n;
     for (let i = (k - 2 <= 0 ? 1 : k - 1); i < k; i++) {
         for (var j = m; j > 1; j--) {
             if ((i & j) < k && (i & j) > max) {
                 max = i & j;
             }
         }
         m--;
     }
     return max;
 }

console.log(getMaxLessThanK(955, 236));
