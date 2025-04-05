import util from "util";
import chalk from "chalk";

class Queue {
    data: [] | null;
    constructor() {
        this.data = []
    }

    enqueue(number: number) {
        this.data.push(number)
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is Empty"
        return this.data.shift()
    }

    peek() {
        if (this.isEmpty()) return "Queue is Empty"
        return this.data[0]
    }

    isEmpty() {
        return this.data.length === 0
    }

    size() {
        return this.data.length
    }

    print() {
        console.log(this.data.toString());
    }
}

// const queueContainer = new Queue();

// console.log(queueContainer.isEmpty())
// queueContainer.enqueue(11)
// queueContainer.enqueue(22)
// queueContainer.enqueue(33)
// queueContainer.enqueue(44)

// queueContainer.print()
// console.log(queueContainer.peek())
// console.log(queueContainer.isEmpty())
// console.log(queueContainer.dequeue())
// queueContainer.print()
// console.log(queueContainer.size());


// Using LS for more efficient and performance

// It improves performance because dequeue() becomes O(1) instead of O(n)
class QueueNode {
    data: QueueNode | null;
    next: QueueNode | null;

    constructor(data: any) {
        this.data = data
        this.next = null;
    }
}

class QueueLS {
    front: QueueNode | null;
    rear: QueueNode | null;
    length: number;

    constructor() {
        this.front = null
        this.rear = null
        this.length = 0;
    }

    enqueue(data: number) {
        const newNode = new QueueNode(data)
        if (!this.rear) {
            this.rear = this.front = newNode;
        } else {
            this.rear.next = newNode
            this.rear = newNode;
        }
        this.length++
    }

    dequeue() {
        if (this.isEmpty()) return " Stack is Empty"
        const current = this.front.data
        this.front = this.front.next
        if (!this.front) this.rear = null;
        this.length--
        return current
    }

    print() {
        let current = this.front;
        let elements = [];
        while (current.next) {
            elements.push(current.data)
            current = current.next
        }
        console.log('Elements of the Queue ', elements.join(' --> '))

    }

    size() {
        if (this.isEmpty()) return " Stack is Empty"
        return this.length
    }

    peek() {
        if (this.isEmpty()) return " Stack is Empty"
        return this.front.data
    }

    isEmpty() {
        return this.length === 0;
    }
}

const queueLSWrapper = new QueueLS();
queueLSWrapper.enqueue(5)
queueLSWrapper.enqueue(10)
queueLSWrapper.enqueue(15)
queueLSWrapper.enqueue(20)
// console.log("Removed Value : ",queueLSWrapper.dequeue());
console.log("Peeked Value : ", queueLSWrapper.peek());

console.log("Check if it is empty : ", queueLSWrapper.isEmpty());

queueLSWrapper.print()

console.log(chalk.magenta(util.inspect(queueLSWrapper, { depth: null, colors: true })));
