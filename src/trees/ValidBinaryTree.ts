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

const binaryTree = new TreeNode(5)
binaryTree.left = new TreeNode(1)
binaryTree.right = new TreeNode(4)
binaryTree.right.left = new TreeNode(3)
binaryTree.right.right = new TreeNode(6)

function validBinaryTree(root: TreeNode | null): Boolean {

    function helper(node: TreeNode | null, min: number | null, max: number | null): boolean {
        if (!node) return true;

        if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
            return false;
        }

        return helper(node.left, min, node.value) && helper(node.right, node.value, max);
    }

    return helper(root, null, null);
}


console.log(validBinaryTree(binaryTree));
