// Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements within the array.

// The test cases are generated such that the answer is always unique.

// You may return the output in any order.

// Example 1:

// Input: nums = [1,2,2,3,3,3], k = 2

// Output: [2,3]
// Example 2:

// Input: nums = [7,7], k = 1

// Output: [7]
// Bucket sort method to perform O(n) approach

function topKthElement(nums, k) {
    const freqMap = new Map();

    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }


    const bucket = Array(nums.length + 1).fill(null).map(() => []);
    for (let [num, freq] of freqMap.entries()) {
        bucket[freq].push(num);
    }
    const result = [];
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        if (bucket[i].length > 0) {
            result.push(...bucket[i]);
        }
    }

    return result.slice(0, k);
}



// console.log(topKthElement([1, 2, 2, 3, 3, 3], 2))


function enCode(strs) {
    let enCodeString = ''
    for (let str of strs) {
        enCodeString += str.length + "#" + str
    }
    return enCodeString;
}

function deCode(encodedStr) {
    let deCodeString = [];
    let i = 0;

    while (i < encodedStr.length) {
        let j = i;
        while (encodedStr[j] !== "#") {
            j++;
        }

        let length = parseInt(encodedStr.substring(i, j), 10);
        let word = encodedStr.substring(j + 1, j + 1 + length);
        deCodeString.push(word);

        i = j + 1 + length;
    }

    return deCodeString;
}

const encodeWord = enCode(["vs", "code"])
console.log(encodeWord);
console.log(deCode(encodeWord));