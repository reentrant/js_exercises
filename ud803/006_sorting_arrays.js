function swap(array, x, y) {
    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
}

function sortArray(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let indexSmallest = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[indexSmallest] ) {
                indexSmallest = j;
            }
        }
        if (i != indexSmallest) {
            swap(array, i, indexSmallest);
        }
    }
}


/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    let second;
    nums.sort(function(x, y) { return x < y; } ); // nums.sort((x, y) => x < y);
    const max = nums[0];
    for (let element of nums) {
        if (element < max) {
            second = element;
            break;
        }

    }
    return second;
}
/*  Sample Input
*
*  2 3 6 6 5
*/
var input = '2 3 6 6 5'
var nums = input.split(' ').map(Number);
console.log(getSecondLargest(nums));
