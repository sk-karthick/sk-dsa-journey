function countGoodSubArray(nums: number[], k: number) {
    let left = 0, pairs = 0, result = 0, freq = new Map();

    for (let right = 0; right < nums.length; right++) {
        const num = nums[right]
        const count = freq.get(num) || 0;

        pairs += count;
        freq.set(num, count + 1)

        while (pairs >= k) {
            result += nums.length - right;
            const leftNum = nums[left]
            const leftCount = freq.get(leftNum);
            pairs -= leftCount -1
            freq.set(leftNum, leftCount -1)
            left++
        }
    }
    return result
}

console.log(countGoodSubArray([1, 1, 1, 1, 1], 10));
