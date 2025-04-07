import chalk from "chalk";
import util from 'util';


class TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


const treeForPathSum = new TreeNode(5)
treeForPathSum.left = new TreeNode(4)
treeForPathSum.left.left = new TreeNode(11)
treeForPathSum.left.left.left = new TreeNode(7)
treeForPathSum.left.left.right = new TreeNode(2)

treeForPathSum.right = new TreeNode(8)
treeForPathSum.right.left = new TreeNode(13)
treeForPathSum.right.right = new TreeNode(4)
treeForPathSum.right.right.right = new TreeNode(1)




function hasPathSum(node: TreeNode | null, target: number): Boolean {
    if (!node) return false;
    if (!node.left && !node.right && node.value === target) {
        return true;
    }
    const remainingSum = target - node.value;

    return hasPathSum(node.left, remainingSum) || hasPathSum(node.right, remainingSum);

}

console.log(hasPathSum(treeForPathSum, 22));


console.log(chalk.yellow(util.inspect(treeForPathSum, { depth: Infinity, colors: true })));





