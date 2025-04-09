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


const serializeBSTNode = new TreeNode(1);
serializeBSTNode.left = new TreeNode(2);
serializeBSTNode.right = new TreeNode(3);
serializeBSTNode.right.left = new TreeNode(4);
serializeBSTNode.right.right = new TreeNode(5);


function serializeBST(root: TreeNode | null): String {
    function helper(root: TreeNode | null): String {
        if (!root) return '';
        const result = root.value + ','
        const left = helper(root.left)
        const right = helper(root.right)
        return result + left + right
    }

    return helper(root)
}
const serialized = serializeBST(serializeBSTNode)
console.log(serializeBST(serializeBSTNode));


function deserialize(data: String): TreeNode | null {
    if (!data) return null;
    const values = data.split(',').map(Number);
    let index = 0;

    function helper(min: number, max: number): TreeNode | null {
        if (index >= values.length) return null;
        const val = values[index];
        if (val < min || val > max) return null;

        index++;
        const node = new TreeNode(val);
        node.left = helper(min, val)
        node.right = helper(val, max)
        return node
    }

    return helper(-Infinity, Infinity)
}

console.log(deserialize(serialized));
