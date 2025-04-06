import chalk from "chalk";
import util from 'util';

class TreeNode {
    value: any;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: any) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreePreOrderTraversal {
    root: TreeNode | null;
    constructor() {
        this.root = null;
    }

    insert(value: any) {
        if (value === null) return;
        const newTreeNode = new TreeNode(value)
        if (!this.root) {
            this.root = newTreeNode
            return
        }
        let current = this.root
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newTreeNode;
                    return
                }
                current = current.left
            } else {
                if (!current.right) {
                    current.right = newTreeNode
                    return
                }
                current = current.right
            }
        }
    }

    inOrderTraversal(node = this.root, result: Array<any> = []) {
        if (!node) return node;
        this.preOrderTraversal(node.left, result)
        result.push(node.value)
        this.preOrderTraversal(node.right, result)
        return result
    }

    preOrderTraversal(node = this.root, result: Array<any> = []) {
        if (!node) return node;
        result.push(node.value)
        this.preOrderTraversal(node.left, result)
        this.preOrderTraversal(node.right, result)
        return result
    }

    postOrderTraversal(node = this.root, result: Array<any> = []) {
        if (!node) return node;
        this.preOrderTraversal(node.left, result)
        this.preOrderTraversal(node.right, result)
        result.push(node.value)
        return result
    }

    rightSideView(node = this.root, result = []) {
        if (!node) return node;
        result.push(node.value)
        this.rightSideView(node.right, result)
        return result
    }
}

const treePreOrderTraversal = new TreePreOrderTraversal()

treePreOrderTraversal.insert(1)
treePreOrderTraversal.insert(2)
treePreOrderTraversal.insert(3)
treePreOrderTraversal.insert(null)
treePreOrderTraversal.insert(5)
treePreOrderTraversal.insert(null)
treePreOrderTraversal.insert(4)

// console.log(treePreOrderTraversal);
// console.log(chalk.bgBlackBright(util.inspect(treePreOrderTraversal, { depth: Infinity, colors: true })))


// console.log(treePreOrderTraversal.preOrderTraversal());
// console.log(treePreOrderTraversal.inOrderTraversal());
// console.log(treePreOrderTraversal.postOrderTraversal());

// console.log(treePreOrderTraversal.rightSideView());

const rightSideNode = new TreeNode(1)
rightSideNode.left = new TreeNode(2)
rightSideNode.left.left = new TreeNode(4)
rightSideNode.left.right = new TreeNode(5)
rightSideNode.right = new TreeNode(3)

interface RightSideViewResult extends Array<any> { }

interface TreeNodeInterface {
    value: any;
    left: TreeNodeInterface | null;
    right: TreeNodeInterface | null;
}

const rightSideView = (node: TreeNodeInterface | null, result: RightSideViewResult = []): RightSideViewResult => {
    function dfs(node: TreeNodeInterface | null, level: number): void {
        if (!node) return;
        if (result.length === level) {
            result.push(node.value);
        }
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }

    dfs(node, 0);
    return result;
};

console.log(rightSideView(rightSideNode));
