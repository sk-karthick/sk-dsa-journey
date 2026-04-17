
function removeDuplicates(nums: number[]): number {
    let slow = 0;

    for (let fast = 1; fast < nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }

    return slow + 1;
}

const nums = [1,1,2,2,3];
let ArrLength = removeDuplicates(nums);
console.log("length:", ArrLength);
console.log("array:", nums);