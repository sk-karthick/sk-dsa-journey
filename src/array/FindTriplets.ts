
const findTriplets = (nums: Array<number>) => {
    let n = nums.length;
    if (n < 3) return 0;

    let maxLeft = new Array(n).fill(-Infinity);
    let maxRight = new Array(n).fill(-Infinity);

    for (let j = 1; j < n; j++) {
        maxLeft[j] = Math.max(maxLeft[j - 1], nums[j - 1]);
    }

    for (let k = n - 2; k >= 0; k--) {
        maxRight[k] = Math.max(maxRight[k + 1], nums[k + 1]);
    }

    let result = 0;

    for (let j = 1; j < n - 1; j++) {
        if (maxLeft[j] > nums[j] && maxRight[j] > 0) {
            result = Math.max(result, (maxLeft[j] - nums[j]) * maxRight[j]);
        }
    }

    return result
}

console.log(findTriplets([12, 6, 1, 2, 7]));