// Find Kth largest element in an array (LEETCODE 215)

import chalk from 'chalk';
import util from 'util'

function quickSelect(nums, k) {
    k = nums.length - k;

    function partition(left, right) {
        let pivot = nums[right], p = left
        for (let i = left; i < right; i++) {
            if (nums[i] <= pivot) {
                [nums[p], nums[i]] = [nums[i], nums[p]];
                p++
            }
        }
        [nums[p], nums[right]] = [nums[right], nums[p]]
        return p
    }

    let left = 0; let right = nums.length - 1;
    while (left <= right) {
        let pivotIndex = partition(left, right);
        if (pivotIndex === k) return nums[pivotIndex]
        if (pivotIndex < k) left = pivotIndex + 1
        else right = pivotIndex - 1
    }
}


console.log(quickSelect([3, 2, 1, 5, 6, 4], 2)); // Output: 5
console.log(quickSelect([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // Output: 4



class MinHeap {
    constructor(k) {
        this.heap = [];
        this.k = k
    }

    insert(data) {
        this.heap.push(data);
        this.heap.sort((a, b) => a - b)
        if (this.heap.length > this.k) {
            this.heap.shift()
        }
    }

    getTop() {
        return this.heap[0]
    }
}

function findKthLargestElement(array, k) {
    const heap = new MinHeap(k);
    for (let data of array) {
        heap.insert(data)
    }
    // console.log(chalk.bgGreenBright(util.inspect(heap, { depth: Infinity, colors: true })));
    return heap.getTop()
}



console.log(findKthLargestElement([3, 2, 1, 5, 6, 4], 2));