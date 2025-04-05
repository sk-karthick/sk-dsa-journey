// Two Sum
// Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

// You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

// Return the answer with the smaller index first.

// Example 1:

// Input: 
// nums = [3,4,5,6], target = 7

// Output: [0,1]
// Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

// Example 2:

// Input: nums = [4,5,6], target = 10

// Output: [0,2]


function twoSum(arr, target) {

    if (arr.length === 0) return null;

    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let complement = target - arr[i]
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(arr[i], i)
    }
    return null;
}

console.log(twoSum([3, 4, 5, 6], 7))