import chalk from 'chalk';
import util from 'util'
// Two Sum problem 
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
}

let nums = [3, 7, 11, 15, 2, 8];
let target = 10;
// console.log(twoSum(nums, target));

// Explanation
// ----------------------------------


// 1st Iteration 
// let map = new map()
// i = 0;
// complement = target(10) - num[i](3) = 7
// if(map.has(complement)) --> false
// map.set(num[i](3=>0))
// map ==> {3==>0}

// 2nd iteration
// i =1 
// complement = 10-7 = 3
// if(map.has(complement)) { --> true because map has 3
// return [map.get(complement), i] --> returns [0,1]
// }

// So the answer is [0,1] 

// const map = new Map()

// map.set(3, 0)

// console.log(map);

// const returnValue = [map.get(3), 1]

// console.log(returnValue);





// Brute Force (O(n²)): Check every pair of numbers.
// Hash Map (O(n)): Store visited numbers in a dictionary and check for the complement.
const twoSums = (arr, k) => {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let complement = k - arr[i]
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(arr[i], i)
    }
    return "Target not match any elements"
}

let nums1 = [11, 15, 2, 8];
let target1 = 10
// console.log('Two Sum :', twoSums(nums1, target1));




// Two Integer Sum II


// Given an array of integers numbers that is sorted in non-decreasing order.

// Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

// There will always be exactly one valid solution.

// Your solution must use 
// O ( 1 )
// O(1) additional space.


const twoIntSum = (nums, target) => {
    // Two pointers method
    // let left = 0, right = nums.length - 1
    // while (left < right) {
    //     let sum = nums[left] + nums[right];
    //     if (sum === target) {
    //         return [nums[left], nums[right]]
    //     }
    //     else if (sum < target) {
    //         left++
    //     } else {
    //         right--
    //     }
    // }


    // HashMap method
    nums.sort((a, b) => a - b)
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (map.has(complement)) {
            return [complement, nums[i]]
        }
        map.set(nums[i], i)
    }
    return null

}

// console.log("Two Integar Sum II : ", twoIntSum([1, 2, 3, 4], 3))



// Three sum problem


const threeSum = (nums, target) => {
    nums.sort((a, b) => a - b)
    let results = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i + 1]) continue;
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum === target) {
                results.push([nums[i], nums[left], nums[right]])

                while (left < right && nums[left] === nums[left + 1]) left++
                while (left < right && nums[right] === nums[right - 1]) right--

                left++
                right--
            } else if (sum < target) {
                left++
            } else {
                right--
            }
        }
    }
    return results
}

// console.log(threeSum([-1, 0, 1, 2, -1, -4], 1));


// ThreeSum problem with target is always 0


const threeSumZero = (nums) => {
    nums.sort((a, b) => a - b)
    let results = []

    for (let i = 0; i < nums.length - 1; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1, right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                results.push([nums[i], nums[left], nums[right]])
                left++
                right--
                while (left < right && nums[left] === nums[left - 1]) left++
                while (left < right && nums[right] === nums[right + 1]) right--
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return results
}

// console.log(threeSumZero([-1, 0, 1, 2, -1, -4]));

// Three sum closest


const threeSumClosest = (nums, target) => {
    nums.sort((a, b) => a - b)
    let closest = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (Math.abs(target - sum) < Math.abs(target - closest)) {
                closest = sum
            } else if (sum < target) {
                left++
            } else {
                right--
            }
        }
    }
    return closest
}


// console.log(threeSumClosest([-1, 2, 1, -4], 1));



const fourSum = (nums, target) => {
    nums.sort((a, b) => a - b)
    let results = [];

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let left = j + 1, right = nums.length - 1
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    results.push([nums[i], nums[j], nums[left], nums[right]])
                    while (left < right && nums[left] === nums[left + 1]) left++
                    while (left < right && nums[right] === nums[right - 1]) right--
                    left++
                    right--
                } else if (sum < target) {
                    left++
                } else {
                    right--
                }
            }
        }
    }
    return results
}

// console.log(fourSum([1, 0, -1, 0, -2, 2], 0));


const fourSumClosed = (nums, target) => {
    nums.sort((a, b) => a - b);
    let closestSum = Infinity

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue

        for (let j = 0; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue

            let left = j + 1, right = nums.length - 1
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                    closestSum = sum
                }

                if (sum < target) {
                    left++
                } else if (sum > target) {
                    right++
                } else {
                    return target
                }
            }
        }
    }
    return closestSum
}


// console.log('fourSumClosed', fourSumClosed([1, 0, -1, 0, -2, 2], 1));





// 1️⃣ Container With Most Water (Leetcode #11)
// 🔹 Summary of the Question
// You are given an array height[], where each element represents the height of a vertical line.
// Find two lines that trap the most water and return the maximum area.

// Steps
// Use two-pointer approach (one at start, one at end).
// Calculate area = width × min(height[left], height[right]).
// Move the pointer at the shorter height (since a taller height has more potential).
// Keep track of the maximum area.
const maxArea = (height) => {
    let left = 0, right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        let width = right - left
        let area = width * Math.min(height[left], height[right])
        maxWater = Math.max(maxWater, area)

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxWater
}

// console.log('maxArea', maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));






const bruteForceApproach = (nums) => {

    let results = new Set()
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            for (let k = 0; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k]
                if (sum === 0 && nums[i] !== nums[j] !== nums[k]) {
                    results.add([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    return results
}

// console.log('bruteForceApproach', bruteForceApproach([-1, 0, 1, 2, -1, -4]))



// Trap water problem
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

const trapRainWaterBruteForce = (height) => {
    let totalWater = 0;
    for (let i = 0; i < height.length; i++) {
        let maxLeft = 0, maxRight = 0;

        for (let j = i; j >= 0; j--) {
            maxLeft = Math.max(maxLeft, height[j])
        }

        for (let j = i; j < height.length; j++) {
            maxRight = Math.max(maxRight, height[j])
        }

        totalWater += Math.max(0, Math.min(maxLeft, maxRight) - height[i])
    }

    return totalWater;
}

// console.log(trapRainWaterBruteForce([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));



const trapWaterTwoPointer = (heights) => {
    let maxLeft = 0, maxRight = 0;
    let left = 0, right = heights.length - 1;
    let totalWater = 0;

    while (left < right) {
        if (heights[left] <= heights[right]) {
            if (heights[left] >= maxLeft) {
                maxLeft = heights[left]
            } else {
                totalWater += maxLeft - heights[left]
            }
            left++
        } else {
            if (heights[right] >= maxRight) {
                maxRight = heights[right]
            } else {
                totalWater += maxRight - heights[right]
            }
            right--
        }
    }
    return totalWater
}

// console.log('trapWaterTwoPointer', trapWaterTwoPointer([4, 2, 0, 3, 2, 5]));



const maxProfit = (prices) => {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i; j < prices.length; j++) {
            let profit = prices[j] - prices[i]
            maxProfit = Math.max(maxProfit, profit)
        }
    }
    return maxProfit
}

// console.log('maxProfit', maxProfit([10, 1, 5, 6, 7, 1]));

// Kadane Algorithms

const maxProfitKadane = (prices) => {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice)
        }
    }
    return maxProfit
}

// console.log('maxProfit Kadane', maxProfitKadane([10, 1, 5, 6, 7, 1]));


const longestSubStringBruteForce = (str) => {
    if (str.length <= 2) return;

    let maxLength = 0;

    for (let i = 0; i < str.length; i++) {
        let seen = new Set();
        for (let j = i; j < str.length; j++) {
            if (seen.has(str[j])) break
            seen.add(str[j])
            maxLength = Math.max(maxLength, j - i + 1)
        }
    }
    return maxLength;
}

// console.log('longestSubStringBruteForce : ', longestSubStringBruteForce("abcabcbb"));


const longestSubString = (str) => {
    let charMap = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < str.length; right++) {
        if (charMap.has(str[right])) {
            left = Math.max(left, charMap.get(str[right]) + 1)
        }
        charMap.set(str[right], right)
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
}

// console.log('longest SubString : ', longestSubString("abcabcbb"));

// Valid parenthesis

// "in" compares key(property) of the object
const isValidParenthesis = (string) => {
    let stack = [];
    let bracketMap = { ')': '(', ']': '[', '}': '{' }

    for (let char of string) {
        console.log('stack', char, stack, char in bracketMap);
        if (char in bracketMap) {
            let top = stack.length > 0 ? stack.pop() : '#'
            if (top !== bracketMap[char]) return false
        } else {
            stack.push(char)
        }
    }

    return stack.length === 0
}

// console.log(isValidParenthesis("[]"));



class Stack {
    constructor() {
        this.stack = []
        this.minStack = []
    }

    push(value) {
        this.stack.push(value)
        if (this.minStack.length === 0 || value <= this.getMin()) {
            this.minStack.push(value);
        }
    }

    pop() {
        if (this.isEmpty()) return "Stack is empty"
        let removed = this.stack.pop()
        if (removed === this.getMin()) {
            this.minStack.pop();
        }
    }

    top() {
        return this.isEmpty() ? "Stack is empty" : this.stack[this.stack.length - 1]
    }

    isEmpty() {
        return this.stack.length === 0
    }

    getMin() {
        return this.minStack.length ? this.minStack[this.minStack.length - 1] : null
    }
}



// const minStack = new Stack();
// minStack.push(1);
// minStack.push(2);
// minStack.push(0);
// console.log(minStack.getMin()); // return 0
// minStack.pop();
// console.log(minStack.top()); // return 2




class PolishNotation {
    constructor() {
        this.stack = []
    }
    evalRPN(tokens) {
        for (let token of tokens) {
            if (!isNaN(token)) {
                this.stack.push(Number(token))
            } else {
                let b = this.stack.pop()
                let a = this.stack.pop()

                switch (token) {
                    case '+':
                        this.stack.push(a + b);
                        break;
                    case '-':
                        this.stack.push(a - b);
                        break;
                    case '*':
                        this.stack.push(a * b);
                        break;
                    case '/':
                        this.stack.push(Math.trunc(a / b));
                        break;
                }
            }
        }
        return this.stack[this.stack.length - 1]
    }
}

const polishNotation = new PolishNotation()

// console.log(polishNotation.evalRPN(["1", "2", "+", "3", "*", "4", "-"]));



const generateParenthesis = (n) => {
    let results = [];
    let current = new Array(2 * n)


    const backtrack = (index, open, close) => {
        if (index === 2 * n) {
            results.push(current.join(""))
            return
        }

        if (open < n) {
            current[index] = "("
            backtrack(index + 1, open + 1, close)
        }

        if (close < open) {
            current[index] = ")"
            backtrack(index + 1, open, close + 1)
        }
    }

    backtrack(0, 0, 0)
    return results
}

// console.log("Generate Parenthesis : ", generateParenthesis(3));


const dailyTemperaturesBruteForce = (temperatures) => {
    let n = temperatures.length;
    let results = new Array(n).fill(0);
    let stack = []
    // Stack Method
    // for (let i = 0; i < n; i++) {
    //     while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
    //         let prevIndex = stack.pop()
    //         results[prevIndex] = i - prevIndex
    //     }
    //     stack.push(i)
    // }

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (temperatures[j] > temperatures[i]) {
                results[i] = j - i
                break;
            }
        }
    }
    return results
}

// console.log("dailyTemperaturesBruteForce", dailyTemperaturesBruteForce([30, 38, 30, 36, 35, 40, 28]));



const getLargestRectangle = (heights) => {
    let left = 0, right = heights.length;
    let maxLeft = 0, maxRight = 0;
    let rectangle = 0;

    while (left < right) {
        if (heights[left] <= heights[right]) {
            if (heights[left] >= maxLeft) {
                maxLeft = heights[left]
            } else {
                rectangle += maxLeft - heights[left]
            }
            left++
        } else {
            if (heights[right] >= maxRight) {
                maxRight = heights[left]
            } else {
                rectangle += maxLeft - heights[left]
            }
            right--
        }
    }
    return rectangle
}

// console.log(getLargestRectangle([2, 1, 5, 6, 2, 3]));

// Output 10


const getMaxArea = (arr) => {
    let n = arr.length, res = 0;

    for (let i = 0; i < n; i++) {
        let curr = arr[i];

        let j = i - 1
        while (j >= 0 && arr[j] >= arr[i]) {
            curr += arr[i]
            j--
        }

        j = i + 1
        while (j < n && arr[j] >= arr[i]) {
            curr += arr[i]
            j++
        }
        res = Math.max(res, curr)
    }
    return res
}

// let arr = [60, 20, 50, 40, 10, 50, 60];

// console.log('getMaxArea', getMaxArea(arr))


// Next Greater Element

const getNextGreaterElementBruteForce = (arr) => {
    let results = new Array(arr.length).fill(-1)

    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            let index = (i + j) % arr.length
            console.log('i :', arr[i], ' j :', arr[j], ' Index :', index);

            if (arr[index] > arr[i]) {
                results[i] = arr[index]
                console.log(' results', results);
                break
            }
        }
        console.log(" ");
    }
    return results
}

// console.log("getNextGreaterElementBruteForce", getNextGreaterElementBruteForce([3, 8, 4, 1, 2]));


function getNextGreaterElement(arr) {
    let n = arr.length;
    let results = new Array(n).fill(-1);
    let stack = []

    for (let i = 0; i < 2 * n; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i % n]) {
            let index = stack.pop()
            results[index] = arr[i % n]
        }
        if (i < n) stack.push(i)
    }
    return results
}

// console.log("getNextGreaterElement", getNextGreaterElement([3, 8, 4, 1, 2]));


// Length Longest substring without repeating character

// Input: s = "zxyzxyz"

// Output: 3

function findLengthOfLongest(str) {

    let n = str.length;
    let result = 0;
    let maxChar = 26;

    for (let i = 0; i < n; i++) {
        let visited = new Array(maxChar).fill(false)
        for (let j = i; j < n; j++) {
            if (visited[str.charCodeAt(j) - 'a'.charCodeAt(0)] === true) break
            else {
                result = Math.max(result, j - i + 1)
                visited[str.charCodeAt(j) - 'a'.charCodeAt(0)] = true
            }
        }
    }
    return result
}

// console.log('findLengthOfLongest', findLengthOfLongest("abcabcbb"));

// This is having so much of time and space like O(n*maxChar) so alterantively we use sliding window 

// function lengthOfUniqueSubstring(str) {

//     let n = str.length, left = 0, right = 0;
//     let visited = new Array(26).fill(false);
//     let res = 0;

//     while (right < n) {
//         while (visited[str[right].charCodeAt(0) - 'a'.charCodeAt(0)] === true) {
//             visited[str[left].charCodeAt(0) -'a'.charCodeAt(0)] = false;
//             left++
//         }
//         visited[str[right].charCodeAt(0) -'a'.charCodeAt(0)] = true

//         res = Math.max(res, (right - left +1))
//         right++
//     }
//     return res
// }

// console.log('Length Of Unique Substring', lengthOfUniqueSubstring("xyzxyz"));

// explanation

// n= 6












function lengthOfUniqueSubstring(s) {
    let left = 0, right = 0, maxLength = 0;
    let charArr = new Array(26).fill(false)
    let n = s.length

    while (right < n) {
        if (charArr[s[right].charCodeAt(0) - 'a'.charCodeAt(0)]) {
            charArr[s[left].charCodeAt(0) - 'a'.charCodeAt(0)] = false
            left++
        } else {
            charArr[s[right].charCodeAt(0) - 'a'.charCodeAt(0)] = true
            maxLength = Math.max(maxLength, right - left + 1)
            right++
        }
    }
    return maxLength
}

// console.log('Length Of Unique Substring', lengthOfUniqueSubstring("xyzxyz"));



//  Longest Consecutive Sequence

function longestConsecutiveSequence(nums) {

    let sortedNums = nums.sort((a, b) => a - b)
    let maxLength = 0, currentLength = 0;
    // [1,2,3,4,100,200]

    for (let i = 0; i < sortedNums.length - 1; i++) {
        if (nums[i] === nums[i - 1]) {
            continue
        }
        if (nums[i] === nums[i - 1] + 1) {
            currentLength++
        } else {
            maxLength = Math.max(maxLength, currentLength)
            currentLength = 1
        }
    }

    return Math.max(maxLength, currentLength)
}

// console.log('longestConsecutiveSequence', longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));



// const lengthOfLongestSubstring = (s) => {

//     let left = 0, right = 0, maxLength = 0;
//     let charArr = new Array(26).fill(false);

//     while (right < s.length) {
//         let index = s[right].charCodeAt(0) - 'a'.charCodeAt(0)

//         if (charArr[index]) {
//             charArr[s[left].charCodeAt(0) - 'a'.charCodeAt(0)] = false
//             left++
//         } else {
//             charArr[index] = true
//             maxLength = Math.max(maxLength, right - left + 1)
//             right++
//         }
//     }
//     return maxLength
// }


// console.log("lengthOfLongestSubstring", lengthOfLongestSubstring("xyzxyz"));


const lengthOfLongestSubstring = (s) => {

    let left = 0, right = 0, maxLength = 0;
    let set = new Set();

    while (right < s.length) {
        while (set.has(s[right])) {
            set.delete(s[left])
            left++
        }
        set.add(s[right])
        maxLength = Math.max(maxLength, right - left + 1)
        right++
    }
    return maxLength
}

// console.log("lengthOfLongestSubstring", lengthOfLongestSubstring("xyzxyz"));




const frequencyCounter = (s) => {
    let charArr = new Array(26).fill(0)

    for (let char of s) {
        charArr[char.charCodeAt(0) - 'A'.charCodeAt(0)]++
    }
    return charArr
}

// console.log("frequencyCounter", frequencyCounter("KARTHICK"));



const characterReplacement = (s, k) => {
    let left = 0, maxCount = 0, maxLength = 0;
    let freq = new Array(26).fill(0);

    for (let right = 0; right < s.length; right++) {
        let index = s[right].charCodeAt(0) - 'A'.charCodeAt(0)
        freq[index]++
        maxCount = Math.max(maxCount, freq[index])

        while ((right - left + 1) - maxCount > k) {
            freq[s[left].charCodeAt(0) - 'A'.charCodeAt(0)]--;
            left++
        }
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
}

// console.log("characterReplacement", characterReplacement("AAABABB", 1));



function permutation(str, strTwo) {
    let n = str.length, m = strTwo.length
    if (n > m) return false;

    let charArrStr = new Array(26).fill(0)
    let charArrStrTwo = new Array(26).fill(0)

    for (let i = 0; i < n; i++) {
        charArrStr[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
        charArrStrTwo[strTwo[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
    }

    if (charArrStr.toString() === charArrStrTwo.toString()) return true;

    console.log("Before", charArrStrTwo);

    for (let i = n; i < m; i++) {
        charArrStrTwo[strTwo[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
        console.log("Middle", charArrStrTwo);

        charArrStrTwo[strTwo[i - n].charCodeAt(0) - 'a'.charCodeAt(0)]--
        console.log("After", charArrStrTwo);

        if (charArrStr.toString() === charArrStrTwo.toString()) {
            console.log(i);

            return true
        };
    }
    return false;
}

// console.log("Permutation : ", permutation("abc", "lecabee"));
//                                                   01234567





function minWindow(s, t) {
    if (t.length > s.length) return "";

    let tFreq = new Map();
    let windowFreq = new Map();

    for (let char of t) {
        tFreq.set(char, (tFreq.get(char) || 0) + 1);
    }

    let left = 0, right = 0;
    let minLen = Infinity, minSubstring = "";
    let required = tFreq.size;
    let formed = 0;

    while (right < s.length) {
        let char = s[right];
        windowFreq.set(char, (windowFreq.get(char) || 0) + 1);

        if (tFreq.has(char) && windowFreq.get(char) === tFreq.get(char)) {
            formed++;
        }

        while (formed === required) {
            let currentWindowSize = right - left + 1;
            if (currentWindowSize < minLen) {
                minLen = currentWindowSize;
                minSubstring = s.substring(left, right + 1);
            }

            let leftChar = s[left];
            windowFreq.set(leftChar, windowFreq.get(leftChar) - 1);

            if (tFreq.has(leftChar) && windowFreq.get(leftChar) < tFreq.get(leftChar)) {
                formed--;
            }

            left++;
        }

        right++;
    }

    return minSubstring;
}

// console.log(minWindow("OUZODYXAZV", "XYZ")); // Output: "YXAZ"
// console.log(minWindow("AA", "AA")); // Output: "AA"
// console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
// console.log(minWindow("AB", "A")); // Output: "A"
// console.log(minWindow("XYZXYZ", "ZZ")); // Output: "ZZ"






// function getFreq(s) {
//     let freq = new Map()
//     for (let char of s) {
//         freq.set(char, (freq.get(char) || 0) + 1)
//     }
//     return freq
// }

// console.log("getFreq", getFreq("karthick"));


class MaxHeap {
    constructor() {
        this.heap = [];
    }

    insert(val, index) {
        this.heap.push({ val, index });
        this.heap.sort((a, b) => b.val - a.val);
    }

    getMax() {
        return this.heap.length ? this.heap[0].val : null;
    }

    removeOutOfWindow(left) {
        while (this.heap.length && this.heap[0].index < left) {
            this.heap.shift();
        }
    }
}

function maxSlidingWindow(nums, k) {
    let heap = new MaxHeap();
    let result = [];

    for (let i = 0; i < k; i++) {
        heap.insert(nums[i], i);
    }
    result.push(heap.getMax());

    for (let i = k; i < nums.length; i++) {
        heap.insert(nums[i], i);
        heap.removeOutOfWindow(i - k + 1);
        result.push(heap.getMax());
    }

    return result;
}

// **Test Cases**
// console.log(maxSlidingWindow([1, 2, 1, 0, 4, 2, 6], 3)); // Output: [2,2,4,4,6]
// console.log(maxSlidingWindow([4, 3, 2, 1], 2)); // Output: [4,3,2]
// console.log(maxSlidingWindow([9, 11, 8, 5, 7, 10], 2)); // Output: [11,11,8,7,10]



// Binary Search


function binarySearch(nums, target) {
    let left = 0, right = nums.length - 1
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)

        if (nums[middle] === target) {
            return middle
        } else if (nums[middle] < target) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    return -1
}

// console.log("Binary Search : ", binarySearch([-1, 0, 2, 4, 6, 8], 4));

// 1. Binary Search (O(m * n))
function search2DMatrix(matrix, target) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (target === matrix[i][j]) {
                return true
            }
        }
    }
    return false
}
let matrix = [[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]]
let target2d = 10;
// console.log("search2DMatrix : ", search2DMatrix(matrix, target2d));

// 1. Binary Search on Each Row(O(m log n))
function search2DMatrixOptimized(matrix, target) {
    for (let row of matrix) {
        let left = 0, right = row.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2)
            if (row[mid] === target) return true;
            else if (row[mid] < target) left = mid + 1
            else right = mid - 1
        }
    }
    return false
}

// console.log("search 2D Matrix : ", search2DMatrixOptimized(matrix, target2d));

function search2DMatrixStaircase(matrix, target) {
    let row = 0, col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] < target) row++;
        else col--;
    }

    return false;
}
// console.log("search 2D Matrix : ", search2DMatrixStaircase(matrix, target2d));


function minEatingSpeed(piles, h) {
    let left = 1, right = Math.max(...piles)

    function canFinish(k) {
        let hours = 0;
        for (let bananas of piles) {
            hours += Math.ceil(bananas / k)
        }
        return hours <= h
    }

    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (canFinish(mid)) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
}

let piles = [3, 6, 7, 11];
let h = 8;
// console.log("Minimum Eating speed :", minEatingSpeed(piles, h));



// O(log n) --> Because of binary search 
function findMin(arr) {

    let left = 0, right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor((left + right) / 2)
        if (arr[mid] > arr[right]) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return arr[left]
}

// console.log("Find Minimum in rotating array : ", findMin([3, 4, 5, 1, 2]));

// O(log n) because of binary search
function searchInRotateArray(nums, target) {
    let left = 0, right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1
}

// console.log(searchInRotateArray([4, 5, 6, 7, 0, 1, 2], 0));


class TimeStamp {
    constructor() {
        this.store = new Map()
    }

    set(key, value, Timestamp) {
        if (!this.store.has(key)) {
            this.store.set(key, [])
        }
        this.store.get(key).push([Timestamp, value])
    }

    get(key, Timestamp) {
        if (!this.store.has(key)) return ""

        let values = this.store.get(key)
        let left = 0, right = values.length - 1;
        let result = "";


        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (values[mid][0] <= Timestamp) {
                result = values[mid][1];
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return result
    }
}


let timeMap = new TimeStamp();
// timeMap.set("foo", "bar", 1);
// console.log(timeMap.get("foo", 1));
// console.log(timeMap.get("foo", 13));
// timeMap.set("foo", "bar2", 4);
// console.log(timeMap.get("foo", 4));
// console.log(timeMap.get("foo", 5));
// console.log(chalk.bgGrey(util.inspect(timeMap, { depth: Infinity, colors: true })));


const MedianArraysBruteForce = (nums1, nums2) => {
    let numsTotal = [...nums1, ...nums2]
    numsTotal.sort((a, b) => a - b)
    let length = numsTotal.length
    if (length % 2 === 0) {
        return (numsTotal[length / 2] + numsTotal[(length / 2) - 1]) / 2
    } else {
        return numsTotal[Math.floor(length / 2)]
    }
}

// console.log(MedianArraysBruteForce([1, 3], [2]));      // Output: 2.0
// console.log(MedianArraysBruteForce([1, 2], [3, 4]));


const findMedianOfSortedArray = (nums1, nums2) => {
    if (nums1.length > nums2.length) return findMedianOfSortedArray(nums2, nums1)

    let len1 = nums1.length, len2 = nums2.length;
    let left = 0, right = len1

    while (left <= right) {
        let particion1 = Math.floor((left + right) / 2)
        let particion2 = Math.floor((len1 + len2 + 1) / 2) - particion1

        let maxLeft1 = particion1 === 0 ? -Infinity : nums1[particion1 - 1]
        let minRight1 = particion1 === len1 ? Infinity : nums1[particion1]
        console.log(maxLeft1, minRight1);

        let maxLeft2 = particion2 === 0 ? -Infinity : nums2[particion2 - 1]
        let minRight2 = particion2 === len2 ? Infinity : nums2[particion2]
        console.log("2nd ", maxLeft2, minRight2);

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if ((len1 + len2) % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            right = particion1 - 1
        } else {
            left = particion1 + 1
        }
    }
}
// console.log(findMedianOfSortedArray([1, 2], [3, 4]));


function findKthSmallestElementSortedArray(nums1, nums2, k) {
    if (nums1.length > nums2.length) return findKthSmallestElementSortedArray(nums2, nums1, k)

    let len1 = nums1.length, len2 = nums2.length;
    let left = Math.max(0, k - len2), right = Math.min(len1, k)
    while (left <= right) {
        let particion1 = Math.floor((left + right) / 2)
        let particion2 = k - particion1;

        let maxLeft1 = particion1 === 0 ? -Infinity : nums1[particion1 - 1]
        let minRight1 = particion1 === len1 ? Infinity : nums1[particion1]

        let maxLeft2 = particion2 === 0 ? -Infinity : nums2[particion2 - 1]
        let minRight2 = particion2 === 0 ? Infinity : nums2[particion2]

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            return Math.max(maxLeft1, maxLeft2)
        } else if (maxLeft1 < minRight2) {
            right = particion1 - 1
        } else {
            left = particion1 + 1
        }
    }
}

// console.log(findKthSmallestElementSortedArray([1, 2, 3], [4, 5, 6], 4));



const people = [
    { age: 3 },
    { age: 2 },
    { age: 2 },
    { age: 1 },
    { age: 1 }
];

const groupedByAge = people.reduce((acc, person) => {
    if (!acc[person.age]) {
        acc[person.age] = [];
    }
    acc[person.age].push(person);
    return acc;
}, {});

// console.log(groupedByAge);


const groupedBy = new Map();
// for(let person of people){
//     if (!groupedBy.has(person.age)) {
//         groupedBy.set(person.age, []);
//     }
//     groupedBy.get(person.age).push(person);
// }

// const groupedByObject = Object.fromEntries(groupedBy.entries());

// console.log(groupedByObject);
