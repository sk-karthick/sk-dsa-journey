
// Kadane's Algorithm

// Find a maximum subarray sum in an array in O(n) time.

// Traverse the array while keeping track of the maximum sum at each index.

// At every step, either extend the current subarray or start a new subarray.

// Maintain a global variable to store the maximum sum found so far.


function kadaneAlgo(nums: Array<number>) {
    let maxSum = nums[0]
    let currentSum = nums[0]

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(currentSum + nums[i], nums[i])
        maxSum = Math.max(currentSum, maxSum)
    }

    return maxSum
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(kadaneAlgo(nums));

