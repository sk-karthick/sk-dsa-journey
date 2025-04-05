

// O(n) → We iterate through the array once.
// O(1) → No extra space used.

// Approach: Count Decreasing Pairs(O(n))
// How We Find the Answer
// Identify decreasing pairs: If nums[i] > nums[i + 1], this is a decrease point(i.e., a break in the sorted order).

// Count the number of decreases:
// If there are 0 decreases, the array is already sorted -->  true
// If there is exactly 1 decrease, the array could be a rotated sorted array --> true
// If there are 2 or more decreases, the array cannot be a rotated sorted array --> false
// Handle wrap - around case: Compare nums[n - 1] with nums[0] since rotation makes elements wrap around.

function check(nums: Array<number>) {
    let count = 0;
    let n = nums.length; // 5

    for (let i = 0; i < n; i++) {
        if (nums[i] > nums[(i + 1) % n]) {
            count++
        }
        if (count > 1) return false
    }

    return true
}

let nums = [3, 4, 5, 1, 2]
console.log(check(nums));
