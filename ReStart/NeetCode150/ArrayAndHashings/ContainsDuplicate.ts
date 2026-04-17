// Contains Duplicate
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.


const nums = [1, 2, 3, 3]

// function containsDuplicate(nums: number[]):boolean {
//     let map = new Map<number>();
//     for (let i = 0; i < nums.length; i++) {
//         if(map.has(nums[i])) {
//             return true
//         }
//         map.set(nums[i], i)
//     }

//     return false
// }


// Another way (chatGpt)

function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();

    for (const num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }

    return false;
}

// function containsDuplicate(nums: number[]): boolean {
//     return new Set(nums).size !== nums.length;
// }

const isContainsDuplicate = containsDuplicate(nums)
console.log(isContainsDuplicate);
