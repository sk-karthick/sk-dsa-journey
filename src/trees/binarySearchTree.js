import chalk from 'chalk';
import util from 'util';

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return
        }
        let current = this.root;
        console.log('Length-------------------', current.length);
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode
                    return
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    search(value) {
        if (!this.root) return "Tree is empty"
        let current = this.root;
        while (current) {
            if (current.value === value) return `Value found ${value}`
            current = value < current.value ? current.left : current.right;
        }
        return `Value not found ${value}`
    }

    findMin() {
        if (!this.root) return "Tree is empty"
        let current = this.root;
        while (current.left) {
            current = current.left
        }
        return current.value
    }

    delete(value, node = this.root, parent = null) {
        if (!node) return null;

        if (value < node.value) {
            node.left = this.delete(value, node.left, node);
        } else if (value > node.value) {
            node.right = this.delete(value, node.right, node);
        } else {
            if (!node.left && !node.right) return null;
            if (!node.left) return node.right;
            if (!node.right) return node.left;

            let successor = node.right;
            while (successor.left) successor = successor.left;
            node.value = successor.value;
            node.right = this.delete(successor.value, node.right, node);
        }
        return node;
    }

    inorderTraversal(node = this.root, results = []) {
        if (!node) return "Tree is empty"

        this.inorderTraversal(node.left, results)
        results.push(node.value)
        this.inorderTraversal(node.right, results)
        return results;
    }

    preOrderTraversal(node = this.root) {
        if (!node) return "Tree is empty"
        console.log(node.value);
        this.preOrderTraversal(node.left)
        this.preOrderTraversal(node.right)
    }

    postOrderTraversal(node = this.root) {
        if (!node) return "Tree is empty";
        this.postOrderTraversal(node.left)
        this.postOrderTraversal(node.right)
        console.log(node.value);
    }

    isValidBST(node = this.root, min = -Infinity, max = Infinity) {
        if (!node) return true;
        if (node.value <= min || node.value >= max) {
            return false;
        }
        return this.isValidBST(node.left, min, node.value) && this.isValidBST(node.right, node.value, max)
    }

    findKthSmallest(node = this.root, value) {
        if (!node) return "Tree is Empty";
        let current = this.inorderTraversal()
        if (value > current.length || value <= 0) return "Invalid value"
        return current[value - 1]
    }

    lowestCommonAncestor(node, p, q) {
        if (!node) return null;
        if (p < node.value && q > node.value) {
            return this.lowestCommonAncestor(node.left, p, q)
        }
        if (p > node.value && q > node.value) {
            return this.lowestCommonAncestor(node.right, p, q)
        }
        return node.value
    }

    sortedArraytoBST(nums) {
        if (nums.length === 0) return null;
        function buildTree(left, right) {
            if (left > right) return null;
            let mid = Math.floor((left + right) / 2);
            let node = new TreeNode(nums[mid]);
            node.left = buildTree(left, mid - 1)
            node.right = buildTree(mid + 1, right)
            return node;
        }
        this.root = buildTree(0, nums.length - 1)
    }
}


const binarySearchTree = new BinarySearchTree()

const sorredArray = [-3, -2, 1, 10, 20, 30, 40, 50]
binarySearchTree.sortedArraytoBST(sorredArray)

console.log('hi');

console.log(chalk.bgBlackBright(util.inspect(binarySearchTree, { depth: Infinity, colors: true })))

// binarySearchTree.insert(6);
// binarySearchTree.insert(2);
// binarySearchTree.insert(8);
// binarySearchTree.insert(0);
// binarySearchTree.insert(4);
// binarySearchTree.insert(7);
// binarySearchTree.insert(9);
// binarySearchTree.insert(3);
// binarySearchTree.insert(5);

// console.log(binarySearchTree.lowestCommonAncestor(binarySearchTree.root, 2, 8));
// console.log(binarySearchTree.lowestCommonAncestor(binarySearchTree.root, 2, 4));
// console.log(binarySearchTree.search(2));
// console.log(binarySearchTree.findMin());
// console.log(binarySearchTree.delete(2));
// console.log(binarySearchTree);


// console.log("In-Order:");
// binarySearchTree.inorderTraversal();

// console.log("Pre-Order:");
// binarySearchTree.preOrderTraversal();

// console.log("Post-Order:");
// binarySearchTree.postOrderTraversal();
// console.log(binarySearchTree.isValidBST());

// console.log(binarySearchTree.findKthSmallest([], 2));
