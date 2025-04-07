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

const treeForLCA = new TreeNode(3)
treeForLCA.left = new TreeNode(5)
treeForLCA.left.left = new TreeNode(6)
treeForLCA.left.right = new TreeNode(2)
treeForLCA.left.right.left = new TreeNode(7)
treeForLCA.left.right.right = new TreeNode(4)

treeForLCA.right = new TreeNode(1)
treeForLCA.right.left = new TreeNode(0)
treeForLCA.right.right = new TreeNode(8)


const lowestCommonAncestor = (root: TreeNode | null, p, q) => {
    if (!root || root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) return root;

    return left ? left : right;
}

console.log(lowestCommonAncestor(treeForLCA, 5, 1));
