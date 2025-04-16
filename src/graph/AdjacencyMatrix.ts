class Graph {
    size: number;
    matrix: number[][];
    constructor(size: number) {
        this.size = size;
        this.matrix = Array.from({ length: size }, () => Array(size).fill(0));
    }

    addEdge(u: number, v: number) {
        this.matrix[u][v] = 1;
        this.matrix[v][u] = 1;
    }

    removeEdge(u: number, v: number) {
        this.matrix[u][v] = 0;
        this.matrix[v][u] = 0;
    }

    printGraph() {
        console.log("Adjacency Matrix");
        for (let row of this.matrix) {
            console.log(row.join(''));
        }
    }
}

const graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 4);
graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(2, 3);
graph.addEdge(3, 4);

graph.printGraph(); 