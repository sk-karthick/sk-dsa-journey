class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insertLevelOrder(value) {
        if (!value.length) return null;
        this.root = new TreeNode(value[0])
        let queue = [this.root];
        let i = 1;
        while (i < value.length) {
            let current = queue.shift()
            console.log('current', current);
            if (i < value.length) {
                current.left = new TreeNode(value[i++])
                queue.push(current.left)
            }
            if (i < value.length) {
                current.right = new TreeNode(value[i++])
                queue.push(current.right)
            }
        }
    }


    inorderTraversal(node, results = []) {
        if (!node) return "Tree is Empty";
        this.inorderTraversal(node.left, results)
        results.push(node.value)
        this.inorderTraversal(node.right, results)
        return results
    }

    postorderTraversal(node, results = []) {
        if (!node) return "Tree is Empty";
        this.postorderTraversal(node.left, results)
        this.postorderTraversal(node.right, results)
        results.push(node.value);
        return results
    }

    preorderTraversal(node, results = []) {
        if (!node) return "Tree is Empty";
        results.push(node.value);
        this.preorderTraversal(node.left, results);
        this.preorderTraversal(node.right, results);
        return results
    }


    levelOrderTraversal() {
        if (!this.root) return "Data not found"
        let queue = [this.root];
        let results = [];
        while (queue.length > 0) {
            let current = queue.shift()
            results.push(current)
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right)
        }
        return results
    }

    findNode(value) {
        let queue = [this.root];
        while (queue.length > 0) {
            let current = queue.shift();
            if (current.value === value) return true;
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right)
        }
        return false
    }

    getHeight(node = this.root) {
        if (!node) return 0;
        return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right))
    }

    getMin(node = this.root) {
        if (!node) return Infinity;
        return Math.min(node.value, this.getMin(node.left), this.getMin(node.right))
    }

    getMax(node = this.root) {
        if (!node) return -Infinity;
        return Math.max(node.value, this.getMax(node.left), this.getMax(node.right))
    }

    deleteNode(value) {
        if (!this.root) return "Data not found"
        let queue = [this.root], keyNode = null, parent = null, lastNode = null;

        while (queue.length > 0) {
            lastNode = queue.shift()

            if (lastNode.value === value) keyNode = lastNode;
            if (lastNode.left) {
                parent = lastNode;
                queue.push(lastNode.left)
            }
            if (lastNode.right) {
                parent = lastNode;
                queue.push(lastNode.right)
            }
        }
        if (keyNode) {
            keyNode.value = lastNode.value
            if (parent.right === lastNode) parent.right = null;
            else parent.left = null;
        }
    }

    // Check if Tree is Balanced
    isBalanced(node = this.root) {
        if (!node) return true;
        let leftHeight = this.getHeight(node.left);
        let rightHeight = this.getHeight(node.right);
        return Math.abs(leftHeight - rightHeight) <= 1 &&
            this.isBalanced(node.left) &&
            this.isBalanced(node.right);
    }

    // Mirror (Invert) the Tree
    mirrorTree(node = this.root) {
        if (!node) return null;
        let temp = node.left;
        node.left = this.mirrorTree(node.right);
        node.right = this.mirrorTree(temp);
        return node;
    }

    printTree() {
        console.log("Preorder Traversal:", this.preorderTraversal(this.root));
        console.log("Inorder Traversal:", this.inorderTraversal(this.root));
        console.log("Postorder Traversal:", this.postorderTraversal(this.root));
    }

    printPretty(node = this.root, prefix = "", isLeft = true) {
        if (!node) return;
        if (node.right) {
            this.printPretty(node.right, prefix + (isLeft ? "│   " : "    "), false);
        }
        console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);
        if (node.left) {
            this.printPretty(node.left, prefix + (isLeft ? "    " : "│   "), true);
        }
    }
}

const binaryTree = new BinaryTree()
binaryTree.insertLevelOrder([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// binaryTree.printTree()
// // console.log("BFS (LEVEL ORDER TRAVERSAL) : ", binaryTree.levelOrderTraversal());
// console.log("Find a node of (5) : ", binaryTree.findNode(5));
// console.log("Height of the Tree : ", binaryTree.getHeight());
// console.log("Min of the Tree node : ", binaryTree.getMin());
// console.log("Max of the Tree node : ", binaryTree.getMax());
// binaryTree.deleteNode(1)
console.log(binaryTree.isBalanced());
binaryTree.printPretty()
binaryTree.mirrorTree()







// value = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// index = [0, 1, 2, 3, 4, 5, 6, 7, 8]

// insertLevelOrder(value){
//     if (!value.length) return null;
//     this.root = new TreeNode(value[0]) //1
//     let queue = [this.root] //[1]
//     let i = 1
//     while (1 < 9) {
//         let current = queue.shift() // []
//         if (1 < 9) {
//             current.left = new TreeNode(value[i++]) //1 --> 2
//             queue.push(current.left) // [2]
//         }
//         if(1 < 9){
//             current.right = new TreeNode(value[i++]) //2-->3
//             queue.push(current.right) //[2,3]
//         }
//     }
// }
// //2nd iteration
// while (3 < 9) {
//     // Queue = [2,3]
//     let current = queue.shift() // [2]
//     if (3 < 9) {
//         current.left = new TreeNode(value[i++]) //3 --> 4
//         queue.push(current.left) // [4,3]
//     }
//     if(4 < 9){
//         current.right = new TreeNode(value[i++]) //4-->5
//         queue.push(current.right) //[3,4,5]
//     }
// }

// // 3nd iteration
// while (5 < 9) {
//     // Queue = [3,4,5]
//     let current = queue.shift() // [3]
//     if (5 < 9) {
//         current.left = new TreeNode(value[i++]) //5 --> 6
//         queue.push(current.left) // [4,5,6]
//     }
//     if(4 < 9){
//         current.right = new TreeNode(value[i++]) //6-->7
//         queue.push(current.right) //[4,5,6,7]
//     }
// }

// // 4th iteration
// while (7 < 9) {
//     // Queue = [4,5,6,7]
//     let current = queue.shift() // [4]
//     if (7 < 9) {
//         current.left = new TreeNode(value[i++]) //7 --> 8
//         queue.push(current.left) // [5,6,7,8]
//     }
//     if(8 < 9){
//         current.right = new TreeNode(value[i++]) //8-->9
//         queue.push(current.right) //[5,6,7,8,9]
//     }
// }