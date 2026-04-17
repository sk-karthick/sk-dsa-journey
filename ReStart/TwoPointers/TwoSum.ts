// Two Sum using two pointers approach

const nums = [1, 2, 3, 4, 6]
const target = 6


// Brutal Force approach
// O(n^2) --> Because of using two loops

// for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//         if (nums[i] + nums[j] == target) console.log(nums[i], nums[j])
//     }
// }


// Optimized approach using two pointers

// function twoSum(nums:Array<number>, target:number) {
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (map.has(complement)) {
//             return [nums[map.get(complement)], nums[i]];
//         }
//         map.set(nums[i], i);
//     }
// }
// console.log(twoSum(nums, target))

function twoPointerForTwoSum(nums: Array<number>, target: number) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let sum = nums[left] + nums[right];
        if (sum == target) {
            return [nums[left], nums[right]];
        }
        if (sum < target) {
            left++;
        } else right--;
    }
}

console.log(twoPointerForTwoSum(nums, target))
