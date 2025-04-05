"use strict";
class Stack {
    data;
    size;
    constructor() {
        this.data = [];
        this.size = 0;
    }
    push(element) {
        this.data.push(element);
        this.size++;
    }
    peek() {
        if (this.isEmpty())
            return "Stack is Empty";
        return this.data[this.data.length - 1];
    }
    pop() {
        if (this.isEmpty())
            return "Stack is Empty";
        this.size--;
        return this.data.pop();
    }
    stackSize() {
        return this.size;
    }
    stackPrint() {
        if (this.isEmpty())
            return "Stack is Empty";
        return this.data.join(' -> ');
    }
    isEmpty() {
        return this.data.length === 0;
    }
}
// const stackContainer = new Stack();
// stackContainer.push(10)
// stackContainer.push(20)
// stackContainer.push(30)
// stackContainer.push(40)
// stackContainer.push(50)
// console.log(stackContainer.peek());
// console.log(stackContainer.pop());
// console.log(stackContainer.stackPrint());
// console.log(stackContainer.stackSize());
// console.log(stackContainer.isEmpty());
// Using linkedList
class StackNode {
    data;
    next;
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class StackLsList {
    size;
    top;
    constructor() {
        this.size = 0;
        this.top = null;
    }
    add(element) {
        const newNode = new StackNode(element);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }
    printView() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        }
        ;
        let current = this.top;
        let result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log(result.join(" --> "));
    }
    isEmpty() {
        return this.top === null;
    }
    stackSize() {
        return this.size;
    }
    pop() {
        if (this.isEmpty()) {
            console.log("Stack is Empty");
        }
        let poppedValue = this.top.data;
        this.top = this.top.next;
        this.size--;
        return poppedValue;
    }
    peek() {
        if (this.isEmpty())
            return "Stack is empty";
        console.log(this.top.data);
    }
}
const lsStackWrapper = new StackLsList();
lsStackWrapper.add(15);
lsStackWrapper.add(44);
lsStackWrapper.add(33);
lsStackWrapper.printView();
// console.log(lsStackWrapper.isEmpty());
// console.log(lsStackWrapper.stackSize());
lsStackWrapper.pop();
lsStackWrapper.pop();
lsStackWrapper.printView();
lsStackWrapper.peek();
