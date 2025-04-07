

function partitionEqualSubsetSum(nums: number[]) {
    const sum = nums.reduce((acc, val) => acc + val, 0);
    if (sum % 2 !== 0) return false;

    const target = sum / 2;
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;

    for (const num of nums) {
        for (let i = target; i >= num; i--) {
            dp[i] = dp[i] || dp[i - num];
        }
    }

    return dp[target];
}

let nums = [1, 5, 11, 5];

console.log(partitionEqualSubsetSum(nums));

