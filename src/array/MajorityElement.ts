// Using Hash Table 
// Time Complexity: O(n)
// Space Complexity: O(n)


function majorityElementHashTable(nums: number[]) {
    const count: { [key: number]: number } = {};
    const majorityCount = Math.floor(nums.length / 2)

    for (let num of nums) {
        count[num] = (count[num] || 0) + 1
        if (count[num] > majorityCount) {
            return num;
        }
    }
}

console.log(majorityElementHashTable([2, 2, 1, 1, 1, 2, 2]));

// Using Sorting Method 
// Time Complexity: O(n log n)
// Space Complexity: O(1)

function majorityElementSorting(nums: number[]) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)];
}
console.log(majorityElementSorting([2, 2, 1, 1, 1, 2, 2]));


// Boyer-Moore Voting Algorithm (Counting Approach)
// Time Complexity: O(n)
// Space Complexity: O(1)
// This algorithm works by maintaining a count of the current candidate for the majority element.
// When the count reaches zero, we select a new candidate.
// If the current number is the same as the candidate, we increment the count.
// If it's different, we decrement the count.
// At the end of the iteration, the candidate will be the majority element.
// Note: This algorithm assumes that a majority element always exists in the array.

function majorityElementBoyerMoore(nums: number[]) {
    let count = 0;
    let candidate: number | null = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate ? 1 : -1);
    }

    return candidate;
}
console.log(majorityElementBoyerMoore([2, 2, 1, 1, 1, 2, 2]));


