
// My method
function ProductOfArrayExpectSelf(nums) {
    let length = nums.length;
    let result = []
    for (let i = 0; i < length; i++) {
        let temp = 1;
        for (let j = 0; j < length; j++) {
            if (nums[i] !== nums[j]) {
                temp = temp * nums[j]
            }
        }
        result.push(temp)
    }
    console.log('result', result);
}

ProductOfArrayExpectSelf([1, 2, 4, 6])
ProductOfArrayExpectSelf([-1, 0, 1, 2, 3])




function productExpectSelf(nums) {
    let n = nums.length
    let result = new Array(n).fill(1)

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        result[i] = prefix;
        prefix = prefix * nums[i]
    }

    let suffix = 1
    for (let j = n - 1; j >= 0; j--) {
        result[j] *= suffix
        suffix *= nums[j]
    }

    return result;
}

console.log(productExpectSelf([1, 2, 4, 6]));
console.log(productExpectSelf([-1, 0, 1, 2, 3]));

// Inital prefix = 1
// result after prefix [1,1,2,8]
// prefix 1,2,8,48


// Inital suffix =1
// Result after suffix [48,24,12,8]
// suffix 1,6, 24,48
