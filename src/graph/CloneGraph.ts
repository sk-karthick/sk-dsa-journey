class GraphNode {
    value: number;
    neighbors: []
    constructor(value: number, neighbors: [] = []) {
        this.value = value;
        this.neighbors = neighbors
    }
}


function buildGraph(adjList: number[][]) {
    if (adjList.length === 0) return null;

    const nodes = new Map();

    for (let i = 0; i < adjList.length; i++) {
        nodes.set(i + 1, new GraphNode(i + 1));
    }

    for (let i = 0; i < adjList.length; i++) {
        const currentNode = nodes.get(i + 1);
        currentNode.neighbors = adjList[i].map(n => nodes.get(n));
    }

    return nodes.get(1);
}


const cloneGraph = function (node) {
    if (!node) return null;
    const visited = new Map();

    function dfs(curr) {
        if (visited.has(curr)) {
            return visited.get(curr)
        }

        const clone = new GraphNode(curr.val)
        visited.set(curr, clone)

        for (let neighbor of curr.neighbors) {
            clone.neighbors.push(dfs(neighbor))
        }
        return clone
    }

    return dfs(node)
};

const adjList = [[2, 4], [1, 3], [2, 4], [1, 3]];
const original = buildGraph(adjList);
const cloned = cloneGraph(original);


function printGraph(node, visited = new Set()) {
    if (!node || visited.has(node.val)) return;
    visited.add(node.val);
    console.log(`Node ${node.val}: Neighbors -> [${node.neighbors.map(n => n.val).join(', ')}]`);
    for (let neighbor of node.neighbors) {
        printGraph(neighbor, visited);
    }
}

printGraph(cloned);