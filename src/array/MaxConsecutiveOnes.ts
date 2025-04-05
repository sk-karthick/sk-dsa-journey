// Max Consecutive Ones
// To find maximum no of 1 contains in subarray. return how many max no of ones contains
// in an subarray

//  O(n) Time Complexity – Only one loop through the array.
// O(1) Space Complexity – Uses only two integer variables.

function maxConsecutiveOnes(nums: Array<number>) {
    let maxOccur = 0;
    let currentCount = 0;

    for (let num of nums) {
        if (num === 1) {
            currentCount++
            maxOccur = Math.max(maxOccur, currentCount)
        } else {
            currentCount = 0
        }
    }

    return maxOccur
}

console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
