import util from 'util';
import chalk from 'chalk';

class PriorityQueue {
    constructor() {
        this.items = []
    }

    enqueue(vechicle, priority) {
        this.items.push({ vechicle, priority })
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is Empty"

        let highestPriorityIndex = 0;
        for (let i = 1; i < this.items.length; i++){
            if(this.items[i].priority > this.items[highestPriorityIndex].priority){
                highestPriorityIndex = 1;
            }
        }
        return this.items.splice(highestPriorityIndex, 1)[0]; 
    }

    isEmpty() {
        return this.items.length === 0;
    }

    print() {
        return this.items;
    }
}

const priorityQueueWrapper = new PriorityQueue()

priorityQueueWrapper.enqueue('Car', 4)
priorityQueueWrapper.enqueue('Bike', 3)
priorityQueueWrapper.enqueue('Cycle', 2)
priorityQueueWrapper.enqueue('Bus', 1)

console.log(priorityQueueWrapper.print());

console.log(priorityQueueWrapper.dequeue());
console.log(priorityQueueWrapper.dequeue());
console.log(priorityQueueWrapper.dequeue());
console.log(priorityQueueWrapper.dequeue());
console.log(priorityQueueWrapper.dequeue());

console.log(priorityQueueWrapper.print());
