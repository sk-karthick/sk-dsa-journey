// Approach: Two Pointers(O(n))
// We follow two pointer because of in place remove duplicates

function removeDuplicateSortedArray(nums: Array<number>) {
    if (nums.length === 0) return 0;
    let i = 0;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }

    return i + 1;
}

// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
let nums = [1, 1, 2]

console.log(removeDuplicateSortedArray(nums));
