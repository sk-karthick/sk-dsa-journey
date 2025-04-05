// Approach
// Since the digits are stored in reverse order, we can add them directly, carrying over the extra value if the sum is ≥ 10.

import chalk from "chalk";
import util from "util";

// Use a dummy head for the resulting linked list to simplify handling.
// Use a carry variable to handle sums greater than 9.
// Traverse both linked lists simultaneously, adding corresponding digits.
// If one list is shorter, treat missing values as 0.
// After traversal, if a carry remains, add a new node.


class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class ArrayToLinkedList {
    constructor() {
        this.head = null
    }

    arrayToLinkedList(arr) {
        if (arr.length === 0) {
            console.log(chalk.bgMagentaBright(" Given array is Empty "));
            return null;
        };

        let dummyHead = new ListNode(0);
        let current = dummyHead;

        for (let num of arr) {
            current.next = new ListNode(num);
            current = current.next;
        }

        this.head = dummyHead.next;
        return this.head;
    }

    isEmpty() {
        return this.head === null
    }

    print() {
        if (this.isEmpty()) return chalk.yellow("List is empty");
        let current = this.head;
        let result = []
        do {
            if (current) {
                result.push(current.val)
                current = current.next
            }
        } while (current !== null)
        return result
    }

    lsToArray(ls) {
        let results = [];
        let current = ls
        while (current !== null) {
            results.push(current.val)
            current = current.next
        }
        return results
    }
}

function addTwoNumbers(l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;

    let p1 = l1.head;
    let p2 = l2.head;

    while (p1 !== null || p2 !== null || carry !== 0) {
        let sum = carry;

        if (p1 !== null) {
            sum += p1.val;
            p1 = p1.next;
        }
        if (p2 !== null) {
            sum += p2.val;
            p2 = p2.next;
        }

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    let resultList = new ArrayToLinkedList();
    resultList.head = dummyHead.next;
    return resultList;
}


let l1arr = [9,9,9,9,9,9,9]
let l2arr = [9,9,9,9]


let l1Array = new ArrayToLinkedList()
let l2Array = new ArrayToLinkedList()


l1Array.arrayToLinkedList(l1arr)
l2Array.arrayToLinkedList(l2arr)

let result = addTwoNumbers(l1Array, l2Array)
console.log(result.lsToArray(result.head));





// function addTwoNumbers(){
//     let dummyHead = new ListNode(0);
//     current = {this.val = 0; this.next = null}
//     let carry = 0;


//     let p1 = l1.head {this.head value:9,next:9,next:9, next:9,next:9,next:9}
//     let p2 = l2.head {this.head value:9,next:9,next:9, next:9}

//     while(true){
//         let sum = carry(0)
//         if(true){
//             sum = sum+p1.value (0+9)
//         }
//         if(true){
//             sum = sum+p2.value(9+9)
//         }
//     }
//     so sum = 18;
//     carry  = Math.floor(sum/10 ==> 18/10 ==>1 )
//     current.next = new List (sum%10 ==> 18%10 => 8)
//     current = current.next
// }
// let result = new ArrayTOLS()

// result.head = dummyHead.next
// return result 