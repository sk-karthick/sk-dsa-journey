// Two Sum

const nums = [2, 7, 11, 15]
const target = 9

function twoSum(nums: number[], target: number) {
    let map = new Map()

    for (let i = 0; i < nums.length; i++) {
        let sum = target - nums[i];

        if (map.has(sum)) {
            return [map.get(sum), i]
        }

        map.set(nums[i], i);
    }
}

const findTwoSumIndices = twoSum(nums, target)
console.log(findTwoSumIndices);
