

// Maximum Product Subarray

// [2,3,-2,4]


function maxProductSubArray(nums: Array<number>) {

    let maxProd = nums[0]
    let minProd = nums[0]
    let result = nums[0]

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] < 0) {
            [maxProd, minProd] = [minProd, maxProd]
        }

        maxProd = Math.max(nums[i], maxProd * nums[i])
        minProd = Math.min(minProd * nums[i], nums[i])

        result = Math.max(result, maxProd)
    }

    return result
}

let nums = [-2, 3, -4]

console.log(maxProductSubArray(nums));

