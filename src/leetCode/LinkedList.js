import chalk from 'chalk';
import util from 'util';

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

const ls = new ListNode(0);
ls.next = new ListNode(1);
ls.next.next = new ListNode(2);
ls.next.next.next = new ListNode(3);

// console.log(reverseLinkedList(ls));

// console.log(JSON.stringify(reverseLinkedList(ls), null, 2));

// reverse Linked List Time --> O(n) Space --> O(n)
class LinkedListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(value) {
        let newNode = new LinkedListNode(value)

        if (!this.head) {
            this.head = newNode 

        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    reverseLinkedList() {
        let prev = null;
        let current = this.head;
        while (current !== null) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }   
        return prev;
    }

    hasCycle() {
        let slow = this.head
        let fast = this.head
        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;

            if(slow === fast){
                return true;
            }
        }
        return false;
    }
}

const lsNode = new LinkedList();
lsNode.add(1)
lsNode.add(2)
lsNode.add(3)
lsNode.add(4)
lsNode.add(5)

console.log(chalk.greenBright(util.inspect(lsNode, { depth: null })))
// const reverseLS = lsNode.reverseLinkedList();
// console.log(JSON.stringify(reverseLS, null, 2));


// Cycle Detection
