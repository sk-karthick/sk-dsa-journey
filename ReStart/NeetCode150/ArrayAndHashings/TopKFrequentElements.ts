// Top K Frequent Elements


const nums = [7, 7, 7, 8, 8, 9]
const k = 2

function topKFrequentElement(nums: number[], k: number) {
    let map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            const currentCount = map.get(nums[i]) ?? 0;
            map.set(nums[i], currentCount + 1)
        } else map.set(nums[i], 1);
    }
    const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
    return sorted.slice(0, k).map(item => item[0]);
}

const findTopKFrequentElement = topKFrequentElement(nums, k)
console.log(findTopKFrequentElement);
