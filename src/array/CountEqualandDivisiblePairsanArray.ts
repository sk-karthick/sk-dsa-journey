function count(nums: number[], k: number) {
    let count = 0;
    const map: Map<number, number[]> = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], []);
        }
        map.get(nums[i])!.push(i);
    }

    for (const indices of map.values()) {
        for (let i = 0; i < indices.length; i++) {
            for (let j = i + 1; j < indices.length; j++) {
                if ((indices[i] * indices[j]) % k === 0) {
                    count++;
                }
            }
        }
    }


    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] === nums[j] && (i * j) % k === 0) {
    //             count++
    //         }
    //     }
    // }

    return count
}

let nums = [3, 1, 2, 2, 2, 1, 3], k = 2
console.log(count(nums, k));


