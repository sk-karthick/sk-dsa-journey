"use strict";
const students = ['Bala', 'Senthil', 'Ramkilli', 'Kalai', 'karthick'];
const isStudent = 'karthick';
console.time('runningTime');
const isStudentCheck = (students, isStudent) => {
    for (let i = 0; i < students.length; i++) {
        if (students[i] === isStudent) {
            // console.log('Student is there', students[i])
            break;
        }
        // (students[i] === isStudent) && console.log('Student is there', students[i])
    }
};
isStudentCheck(students, isStudent);
console.timeEnd('runningTime');
// Array Chunk
function arrayChunk(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}
// console.log(arrayChunk([1, 2, 3, 4, 5], 2));
// First iteration
// 1 . i=0 slice --> (0, 2) --> [1,2]
// Second iteration
// 1 . i=2 slice --> (2, 4) --> [3,4]
// Thrid iteration
// 1 . i=4 slice --> (4, 5) --> [4,5]
const arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(4, 5))
// Two Sum 
const twoSum = (num, target) => {
    const length = num.length;
    const twoSumArrayElement = [];
    for (let i = 0; i < length; i++) {
        if (num[i] + num[i + 1] == target) {
            twoSumArrayElement.push([num[i], num[i + 1]]);
        }
    }
    return twoSumArrayElement;
};
// console.log(twoSum([2, 7, 11, 15, 8, 1], 9));
// To be resolve
// Find Min and Max number of an array
// const arrayMinMax = [545, 45, 2, 8, 2, 6, 84545, 5, 545, 454, 54, 87, 8]
// findMinMax(arrayMinMax)
// function findMinMax(arr: Array<numbers>) {
//     console.log(arr);
//     let min = 0;
//     let max = 0;
//     const minMath = Math.min(arr)
//     console.log(minMath);
// }
// Maximum Subarray (Kadane’s Algorithm)
// Problem: Find the contiguous subarray within an array (containing at least one number) that has the largest sum.
