function LongestConsecutive(nums) {
    if (nums.length === 0) return 0

    let numSet = new Set(nums)
    let longest = 0;
    for (let num of nums) {
        if (!numSet.has(num - 1)) {
            let current = num;
            let count = 1;
            while (numSet.has(current + 1)) {
                current++;
                count++
            }
            longest = Math.max(longest, count)
        }
    }
    return longest
}

// console.log(LongestConsecutive([2, 20, 4, 10, 3, 4, 5]))


// Explanation 
// if(!1){ current = 2, count = 1
// While(3){current = 1, count = 1}
// longest = Math.max(0, 2)
// }

// 2nd iteration 
// if(19){if(while(false))}

// 3rd iteration
// if


// Find missing Number in an array


// const arr = [9,6,4,2,3,5,7,0,1]
const arr = [0, 1, 2, 3, 5]

function findMissingNumber(arr) {
    let missing = arr.length;
    for (let i = 0; i < arr.length; i++) {
        missing ^= i ^ arr[i]
    }
    return missing
}

console.log('Missing Number', findMissingNumber(arr));

// ---------------------------------------------------------------------------------
// Problem solving using Reduce method


function missingNumber(arr) {
    let n = arr.length;
    let expectSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((acc, num) => { return acc + num }, 0)
    return actualSum - expectSum;
}

// console.log('Formula Method', missingNumber(arr));


// Find Max value of array:

function findMax(arr) {
    let length = arr.length;
    const maxValue = arr.reduce((acc, num) => { return Math.max(acc, num) }, 0)
    return maxValue
}
// console.log(findMax(arr));


// Counting the occurance 
const votes = ['yes', 'no', 'yes', 'yes', 'no', 'yes', 'maybe'];

const voteCount = votes.reduce((acc, current) => {
    acc[current] = (acc[current] || 0) + 1
    return acc
}, {})

// console.log(voteCount);


const words = ["apple", "banana", "cherry", "strawberry", "grape"];

const findLongest = words.reduce((acc, curr) => {
    return curr.length > acc.length ? curr : acc
}, '')

// console.log('find Longest word', findLongest);