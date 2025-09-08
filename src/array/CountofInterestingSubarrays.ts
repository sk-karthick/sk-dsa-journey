function countInterestingSubarray(nums: number[], modulo: number, k: number) {
    let count = 0;
    for (let num in nums) {
        if (num % modulo == k) {
            count += 1
        }
    }
    return count
}

console.log(countInterestingSubarray([3, 2, 4], 2, 1));
