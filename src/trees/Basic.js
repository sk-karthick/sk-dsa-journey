import chalk from "chalk";
import util from 'util'

class TreeNode {
    constructor(value) {
        this.data = value;
        this.child = []
    }

    addChild(node) {
        this.child.push(node);
    }
}

const root = new TreeNode("A")
const NodeB = new TreeNode("B")
root.addChild(NodeB);
root.addChild(new TreeNode("C"))
NodeB.addChild(new TreeNode("D"))


console.log(chalk.magentaBright(util.inspect(root, { depth: Infinity, colors: true })));
