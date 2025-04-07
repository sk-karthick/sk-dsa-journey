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


const symmetricTree = new TreeNode(1)
symmetricTree.left = new TreeNode(2)
// symmetricTree.left.left = new TreeNode(3)
// symmetricTree.left.right = new TreeNode(4)

symmetricTree.right = new TreeNode(3)
// symmetricTree.right.left = new TreeNode(4)
// symmetricTree.right.right = new TreeNode(3)

function isSymmetricTree(node: TreeNode | null) {
    if (!node) return true;

    function isMirror(t1: TreeNode | null, t2: TreeNode | null): boolean {
        if (!t1 && !t2) return true;
        if (!t1 || !t2) return false;
        if (t1.value !== t2.value) return false;

        return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
    }

    return isMirror(node.left, node.right);
}

console.log(isSymmetricTree(symmetricTree));


console.log(chalk.yellow(util.inspect(symmetricTree, { depth: Infinity, colors: true })));




