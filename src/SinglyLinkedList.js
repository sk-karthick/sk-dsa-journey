"use strict";
const k = null;
// !k ? console.log('Hi') : console.log('Hello');
// Singly Linked List
class ListNode {
    data;
    next;
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    head;
    size;
    constructor() {
        this.head = null;
        this.size = 0;
    }
    append(data) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }
    printList() {
        let current = this.head;
        let elements = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(' --> '));
    }
    print() {
        let current = this.head;
        let elements = [];
        while (current?.next) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(' --> '));
    }
    insert(data, index = 0) {
        if (index < 0 || index > this.size) {
            console.log('Index out of boundary ');
            return;
        }
        const newNode = new ListNode(data);
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            let current = this.head;
            let previous = null;
            let i = 0;
            while (i < index) {
                previous = current;
                current = current.next;
                i++;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
    }
    remove(data) {
        if (!this.head) {
            console.log('List is empty');
            return;
        }
        if (this.head.data === data) {
            // If the head node is the one to remove
            this.head = this.head.next;
        }
        else {
            let current = this.head;
            let previous = null;
            while (current && current.data !== data) {
                previous = current;
                current = current.next;
            }
            if (!current) {
                console.log('List item not found');
                return;
            }
            previous.next = current.next;
        }
        this.size--;
    }
    searchAValue(data) {
        let current = this.head;
        let i = 0;
        while (current) {
            if (current?.data === data) {
                console.log('Value found', data, 'as an index of', i);
                return true;
            }
            current = current.next;
            i++;
        }
        return console.log('Value not found');
    }
    printAArray() {
        let current = this.head;
        let elements = [];
        while (current) {
            elements.push(current?.data);
            current = current.next;
        }
        console.log(elements);
    }
    reverse() {
        let current = this.head;
        let previous = null;
        let next = null;
        while (current) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }
    insertAt(data, index = 0) {
        if (0 > index || index > this.size) {
            console.log('List index is out of boundary ');
        }
        const newNode = new ListNode(data);
        if (index === 0) {
            let current = this.head;
            this.head = newNode;
            newNode.next = current;
        }
        else {
            let current = this.head;
            let i = 0;
            let previous = null;
            if (i < index) {
                previous = current;
                current = current?.next;
                i++;
            }
            newNode.next = current;
            previous.next = newNode;
        }
    }
}
const linkedList = new LinkedList();
linkedList.append('Hi');
linkedList.append('Hello');
linkedList.append('Welcome');
linkedList.append('How');
linkedList.append('are');
linkedList.append('you');
linkedList.append('?');
linkedList.insertAt('Bala', 1);
console.log('----------------------------------------------------------------------------');
linkedList.printList();
// linkedList.insert('karthick', 1)
// linkedList.insert('karthick')
// linkedList.searchAValue('you')
// console.log('--------------------------------');
// console.log('List Size ', linkedList.size);
// console.log('--------------------------------');
// linkedList.printList()
// linkedList.printAArray()
// linkedList.remove('karthick')
// console.log('--------------------------------');
// console.log('List Size ', linkedList.size);
// console.log('--------------------------------');
// linkedList.printList()
// console.info('--------------Reverse a list------------------');
// linkedList.reverse()
// linkedList.printList()
// // Customm try
// console.info('--------------Print a list------------------');
// linkedList.print();
