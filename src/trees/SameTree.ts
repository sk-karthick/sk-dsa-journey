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

const pTree = new TreeNode(1)
pTree.left = new TreeNode(2)
pTree.right = new TreeNode(1)

const qTree = new TreeNode(1)
qTree.left = new TreeNode(1)
qTree.right = new TreeNode(2)


function isSameTree(pTree: TreeNode | null, qTree: TreeNode | null): Boolean {
    if (!pTree && !qTree) return true;
    if (!pTree || !qTree) return false;
    if (pTree.value !== qTree.value) return false;
    return isSameTree(pTree.left, qTree.left) && isSameTree(pTree.right, qTree.right);
}

console.log(isSameTree(pTree, qTree));


