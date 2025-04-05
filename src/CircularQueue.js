import util from 'util'
import chalk from 'chalk';

// Circular Queue

class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class CQueue {
    constructor() {
        this.front = this.rear = null;
        this.size = 0;
    }

    enqueue(data) {
        const newNode = new Node(data)
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
            newNode.next = this.front;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
            this.rear.next = this.front;
        }
        this.size++
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is Empty";
        let removedNode = this.front
        if (this.front === this.rear) {
            this.front = this.rear = null;
        } else {
            this.front = this.front.next;
            this.rear.next = this.front;
        }
        this.size--
        return `removedNode ${removedNode.data}`
    }

    print() {
        if (this.isEmpty()) return "Queue is Empty";
        let current = this.front;
        let results = [];
        do {
            results.push(current.data);
            current = current.next
        } while (current !== this.front)
        const output = `Containing Elements ${results.join(' <--> ')}`;
        console.log(chalk.bgCyan(output));
    }

    isEmpty() {
        return this.size === 0
    }
}

const cQueueWrapper = new CQueue()
cQueueWrapper.enqueue(10)
cQueueWrapper.enqueue(20)
cQueueWrapper.enqueue(30)
cQueueWrapper.enqueue(40)
console.log(chalk.bgRed(cQueueWrapper.dequeue()));
cQueueWrapper.print()
console.log(chalk.magenta(util.inspect(cQueueWrapper, { depth: Infinity, colors: true })));
console.log(chalk.magenta(`Front: ${cQueueWrapper.front?.data}, Rear: ${cQueueWrapper.rear?.data}, Size: ${cQueueWrapper.size}`));