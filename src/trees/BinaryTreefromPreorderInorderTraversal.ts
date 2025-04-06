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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    if (!preorder.length || !inorder.length) return null;

    const inorderMap = new Map<number, number>();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    let preIndex = 0;

    function helper(inLeft: number, inRight: number): TreeNode | null {
        if (inLeft > inRight) return null;

        const rootValue = preorder[preIndex++];
        const root = new TreeNode(rootValue);

        const index = inorderMap.get(rootValue)!;

        root.left = helper(inLeft, index - 1);
        root.right = helper(index + 1, inRight);

        return root;
    }

    return helper(0, inorder.length - 1);
}

function printLevelOrder(root: TreeNode | null): (number | null)[] {
    if (!root) return [];

    const result: (number | null)[] = [];
    const queue: (TreeNode | null)[] = [root];

    while (queue.length) {
        const node = queue.shift();
        if (node) {
            result.push(node.value);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }

    while (result[result.length - 1] === null) result.pop();
    return result;
}

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

const tree = buildTree(preorder, inorder);
console.log(printLevelOrder(tree));

