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

const treeForm = new TreeNode(1)
treeForm.left = new TreeNode(2);
treeForm.left.left = new TreeNode(4);
treeForm.left.right = new TreeNode(5);
treeForm.right = new TreeNode(3);

const diameterofBinaryTree = (node: TreeNode | null, diameter = 0) => {

    const height = (node: TreeNode | null): number => {
        if (!node) return 0;

        const left = height(node.left)
        const right = height(node.right)

        diameter = Math.max(diameter, left + right)

        return Math.max(left, right) + 1
    }
    height(node)
    return diameter
}

console.log(diameterofBinaryTree(treeForm));

