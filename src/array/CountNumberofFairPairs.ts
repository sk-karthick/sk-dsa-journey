const countFairPair = (nums: number[], lower: number, higher: number) => {
    let count = 0;
    // Brute Force Approach
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         let sum = nums[i] + nums[j]
    //         if (lower <= sum && higher >= sum) {
    //             count++
    //             console.log(sum, '==> ', i, j);

    //         }
    //     }
    // }

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        const left = lowerBound(nums, i + 1, nums.length - 1, lower - nums[i]);
        const right = higherBound(nums, i + 1, nums.length - 1, higher - nums[i]);
        count += right - left + 1;
    }

    return count;

    function lowerBound(arr: number[], start: number, end: number, target: number): number {
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return start;
    }

    function higherBound(arr: number[], start: number, end: number, target: number): number {
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (arr[mid] <= target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return end;
    }
}

console.log(countFairPair([0, 1, 7, 4, 4, 5], 3, 6));