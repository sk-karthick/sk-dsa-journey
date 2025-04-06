import chalk from "chalk";
import util from 'util';

class TreeNode {
    value: number;
    left: TreeNode | null
    right: TreeNode | null

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


const treeForm = new TreeNode(4)
treeForm.left = new TreeNode(2)
treeForm.left.left = new TreeNode(1)
treeForm.left.right = new TreeNode(3)
treeForm.right = new TreeNode(7)
treeForm.right.left = new TreeNode(6)
treeForm.right.right = new TreeNode(9)


function invertBinaryTree(root: TreeNode) {

    if (!root) return null;

    // const temp = root.left;
    // root.left = invertBinaryTree(root.right);
    // root.right = invertBinaryTree(temp);

    const queue: TreeNode[] = [root]
    
    while (queue.length > 0) {
        const node = queue.shift()!;
        const temp = node.left;
        node.left = node.right;
        node.right = temp;

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return root
}



console.log(chalk.redBright(util.inspect(treeForm, { depth: Infinity, colors: true })))


console.log(chalk.greenBright(util.inspect(invertBinaryTree(treeForm), { depth: Infinity, colors: true })));
