const numbers = [2, 7, 11, 15]
const target = 9

function twoSumWithTarget(nums: Array<number>, target: number) {
    let left = 0;
    let right = nums.length - 1

    while (left < right) {
        let sum = nums[left] + nums[right]
        if(sum == target) {
            return [nums[left], nums[right]]
        } else if (sum > target) {
            right--
        } else left++
    }
}

console.log(twoSumWithTarget(numbers, target));
