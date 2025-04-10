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

const tree = new TreeNode(3)
tree.left = new TreeNode(1)
tree.left.right = new TreeNode(2)
tree.right = new TreeNode(4)


function kthSmallestBST(root: TreeNode | null, k: number): number {

    function helper(root: TreeNode | null, result: number[] = []) {
        if (!root) return null;
        helper(root.left, result)
        result.push(root.value)
        helper(root.right, result)
        return result
    }
    const result = helper(root);
    return result ? result[0] : -1;
}

console.log(kthSmallestBST(tree, 1));
