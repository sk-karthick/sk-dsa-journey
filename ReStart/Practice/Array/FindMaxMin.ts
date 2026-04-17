// // Find maximum and minimum in an array



// // Brute Force Approach
// const nums = [1, 2, 3, 4];

// function findMaxMin(nums) {
//     const arrLengh = nums.length;
//     const output = new Array(arrLengh);

//     for (let i = 0; i < arrLengh; i++) {
//         let result = 1;
//         for (let j = 0; j < arrLengh; j++) {
//             if (i !== j) {
//                 result *= nums[j];
//             }
//         }

//         output[i] = result

//     }

//     return output;
// }


// // console.log(findMaxMin(nums))


// // [6, 3, 2]
// // [24,12,8,6]

// const findProductExpectSelf = () => {
//     const n = nums.length;
//     const output = new Array(n).fill(1)

//     let prefix = 1;
//     for (let i = 0; i < n; i++) {
//         output[i] = prefix
//         prefix *= nums[i]
//     }

//     let suffix = 1;
//     for (let i = n - 1; i >= 0; i--) {
//         output[i] *= suffix
//         suffix *= nums[i]
//     }

//     return output
// }

// console.log(findProductExpectSelf(nums));
// // Output: [24,12,8,6]

// // Time Complexity: O(n)
// // Space Complexity: O(1)
