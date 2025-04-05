class CircularDoublyListNode {
    data: CircularDoublyListNode | null
    next: CircularDoublyListNode | null
    prev: CircularDoublyListNode | null
    constructor(data: any) {
        this.data = data
        this.next = null;
        this.prev = null
    }
}

class CircularDoublyList {
    head: CircularDoublyListNode | null;
    tail: CircularDoublyListNode | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null
        this.size = 0;
    }

    append(data: any) {
        const newNode = new CircularDoublyListNode(data);
        if (!this.head) {
            this.head = this.tail = newNode;
            newNode.next = this.tail
            newNode.prev = this.head
        } else {
            newNode.next = this.head;
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.head.prev = newNode;
            this.tail = newNode;
        }
        this.size++
    }

    print() {
        let current = this.head;
        let elements = [];
        do {
            elements.push(current.data)
            current = current.next
        } while (current !== this.head)
        console.log(elements.join(' <--> '))
    }

    remove(data: any) {
        if (!this.head) return false;

        let current = this.head;

        do {
            if (current.data === data) {
                if (this.size === 1) {
                    this.head = this.tail = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev

                    if (this.head === current) this.head = current.next
                    if (this.tail === current) this.tail = current.prev
                }
                this.size--;
                return true
            }
            current = current.next
        } while (current !== this.head)
    }

    insertByIndex(data: any, index: any = 1) {
        const newNode = new CircularDoublyListNode(data);
        if (!this.head) {
            this.head = this.tail = newNode;
            this.head.next = this.tail;
            this.head.prev = this.tail;
            this.tail.next = this.head;
            this.tail.prev = this.head;
        } else {
            let current = this.head;
            let i = 0;
            while (i <= index) {
                if (i === index) {
                    newNode.prev = current.prev;
                    newNode.next = current;

                    if (current.prev) {
                        current.prev.next = newNode;
                    }
                    current.prev = newNode;
                }
                current = current.next
                i++;
            }
        }

    }

    getSize(): number {
        return this.size;
    }
}

const circularDoublyList = new CircularDoublyList()

circularDoublyList.append(5)
circularDoublyList.append(15)
circularDoublyList.append(25)
circularDoublyList.append(35)
circularDoublyList.append(45)
circularDoublyList.print()
console.log(circularDoublyList.getSize());

circularDoublyList.remove(15)

circularDoublyList.print()

console.log('Size :', circularDoublyList.getSize());
console.log('======================HI===============================');

circularDoublyList.insertByIndex(55, 2)
circularDoublyList.print()
