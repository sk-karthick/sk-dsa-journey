// Product of Array Except Self

const nums = [1, 2, 3, 4]

function productExceptSelf(nums: number[]) {

    const result = new Array(nums.length).fill(1)

    let prefix = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix = prefix * nums[i]
    }

    let suffix = 1
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffix;
        suffix *= nums[i]
    }

    return result
}

const findProductExceptSelf = productExceptSelf(nums)
console.log(findProductExceptSelf);
