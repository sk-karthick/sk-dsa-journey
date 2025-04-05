

// Formula  
// maxSum=max(normalKadane(nums),totalSum−minKadane(nums))

function maxSubArray(nums) {
    let current = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        current = Math.max(nums[i], current + nums[i])
        maxSum = Math.max(maxSum, current)
    }

    return maxSum
}

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))



function maxSubArrayCircular(nums) {
    let maxKadane = maxSubArray(nums);
    let totalSum = nums.reduce((acc, curr) => acc + curr, 0)
    let minkadane = maxSubArray(nums.map(num => -num))
    return maxKadane > 0 ? Math.max(maxKadane, totalSum + minkadane) : maxKadane
}

// console.log(maxSubArrayCircular([1,-2,3,-2]))


function maxSumSubmatrix(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let maxSum = -Infinity;

    for (let left = 0; left < cols; left++) {
        let temp = new Array(rows).fill(0);
        for (let right = left; right < cols; right++) {
            for (let i = 0; i < rows; i++) {
                temp[i] += matrix[i][right];
            }
            console.log(`left: ${left}, right: ${right}, temp: [${temp}]`);
            let currentMax = maxSubArray(temp);
            console.log(`maxSubArray(temp) = ${currentMax}`);
            maxSum = Math.max(maxSum, maxSubArray(temp));
        }
    }
    return maxSum;
}

// console.log(maxSumSubmatrix([
//     [1, -2, -1, 4],
//     [-8, 3, 4, 2],
//     [3, 8, 10, -8]
// ])); // Output: 23


function subArraySum(nums, k) {
    let prefix = 0;
    let count = 0;
    let map = new Map();
    map.set(0, 1);

    for (let num of nums) {
        prefix += num;
        if (map.has(prefix - k)) {
            count += map.get(prefix - k)
        }
        map.set(prefix, (map.get(prefix) || 0) + 1)
    }
    return count;
}

// console.log(subArraySum([1, 1, 2], 1))


function checkPalindrome() {

}

const isPalindrome = (str) => {
    let left = 0; let right = str.length - 1;
    while (left < right) {

        if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }
    return true
}

console.log(isPalindrome("racecar"))

