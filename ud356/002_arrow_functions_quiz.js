/*
 * Modify and return the array so that all even elements are doubled and all odd elements are
 * tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
let array = '1 2 3 4 5'.split(' ').map(Number);

function modifyArray(nums) {
    return nums.map(x => x % 2 === 0 ? 2 * x : 3 * x );
}

console.log(modifyArray(array).toString().split(',').join(' '));
