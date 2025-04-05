

function twoSum(nums: Array<number>, k: number) {
    // O(n) --> time , space complexity
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let complement = k - nums[i]
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }

    // O(N^2) --> Brute force approach (two loops) --> Time
    // O(1) --> No extra space used --> Space

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //         if (nums[i] + nums[j] === k) {
    //             return [nums[i], nums[j]]
    //         }
    //     }
    // }
}

console.log(twoSum([2, 7, 11, 15], 9));


