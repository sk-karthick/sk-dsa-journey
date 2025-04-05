// Find Kth largest element in an array (LEETCODE 215)

import chalk from 'chalk';
import util from 'util'

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
    console.log(chalk.bgGreenBright(util.inspect(heap, { depth: Infinity, colors: true })));
    return heap.getTop()
}



console.log(findKthLargestElement([3, 2, 1, 5, 6, 4], 2));

