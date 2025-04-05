// Rotate Array 

// 1.Brute Force Approach
// Using extra space and loops 
// O(n) time and space, because we using two loops so O(n) + O(n) => O(n)


// Using Extra space approach
function rotateArray(nums: Array<number>, k: number) {
    let n = nums.length;
    k = k % n
    let rotate = new Array(n)

    for (let i = 0; i < n; i++) {
        rotate[(i + k) % n] = nums[i]
    }

    for (let i = 0; i < n; i++) {
        nums[i] = rotate[i]
    }

    return nums
}


let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 3
// console.log(rotateArray(nums, k));



// Using Array reverse 
// O(n) time, O(1) space


function arrayRotate(nums: Array<number>, k: number) {
    let n = nums.length
    k = k % n

    function reverse(start: number, end: number) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]]
            start++
            end--
        }
    }

    reverse(0, n - 1)
    reverse(0, k - 1)
    reverse(k, n - 1)

    return nums;
}

console.log(arrayRotate(nums, k));
