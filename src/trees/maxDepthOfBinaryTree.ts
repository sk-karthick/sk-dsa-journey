import chalk from "chalk";
import util from 'util';

class TreeNode {
    value: Number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: Number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


interface TreeNode {
    value: Number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function findMaxDepth(node: TreeNode | null, maxDepth: number = 0): number {
    if (!node) return maxDepth;
    const leftDepth = findMaxDepth(node.left, maxDepth + 1);
    const rightDepth = findMaxDepth(node.right, maxDepth + 1);
    return Math.max(leftDepth, rightDepth);


    // if (!node) return 0;
    // return 1 + Math.max(findMaxDepth(node.left), findMaxDepth(node.right));
}

const maxDepthOfBinaryTree = new TreeNode(3);
maxDepthOfBinaryTree.left = new TreeNode(9);
maxDepthOfBinaryTree.right = new TreeNode(20);
maxDepthOfBinaryTree.right.left = new TreeNode(15);
maxDepthOfBinaryTree.right.right = new TreeNode(7);

// console.log(chalk.bgRedBright(util.inspect(maxDepthOfBinaryTree, { depth: Infinity, colors: true })))

console.log(findMaxDepth(maxDepthOfBinaryTree));
