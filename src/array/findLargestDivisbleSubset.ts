
const findLargestDivisbleSubset = (nums: number[]) => {
    if (nums.length === 0) return [];

    nums.sort((a, b) => a - b);

    const n = nums.length;
    const dp = new Array(n).fill(1);
    const prev = new Array(n).fill(-1);
    let maxLen = 1;
    let maxIndex = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] == 0 && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                prev[i] = j
            }
        }
        if (dp[i] > maxLen) {
            maxLen = dp[i];
            maxIndex = i
        }
    }
    const result: number[] = [];

    let current = maxIndex;
    while (current !== -1) {
        result.unshift(nums[current]);
        current = prev[current];
    }

    return result;
}

console.log(findLargestDivisbleSubset([1, 2, 4, 8]));


