

const minOperation = (nums: number[]) => {
    let count = 0;

    while (true) {
        const set = new Set<number>();
        let hasDuplicate = false;

        for (let i = 0; i < nums.length; i++) {
            if (set.has(nums[i])) {
                hasDuplicate = true;
                break;
            } else {
                set.add(nums[i]);
            }
        }

        if (!hasDuplicate) break;

        nums.splice(0, 3);
        count++;
    }

    return [nums, count]
}


let nums = [1, 2, 3, 4, 2, 3, 3, 5, 7]

console.log(minOperation(nums));
