const nums = [0, 1, 0, 3, 12]

// function moveZeros(nums: Array<number>) {
//     if (nums.length == 0) return null;
//     let left = 0, right = left + 1;

//     do {
//         if (nums[left] == 0 && nums[right] != 0) {
//             [nums[left], nums[right]] = [nums[right], nums[left]]
//             left++
//         } else {
//             right++
//         }
//     } while (right < nums.length)

//     return nums
// }

function moveZeros(nums: number[]) {
    let slow = 0;

    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            slow++;
        }
    }

    return nums;
}


console.log(moveZeros(nums));


// slow = 0 , fast = 0
// fast = 1 , slow = 1
