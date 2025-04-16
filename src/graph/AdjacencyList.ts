class Graph {
    adjList: { [key: number]: number[] };

    constructor() {
        this.adjList = {}
    }

    addVertex(vertex: number) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = []
        }
    }

    addEdge(u: number, v: number) {
        this.addVertex(u)
        this.addVertex(v)

        this.adjList[u].push(v)
        this.adjList[v].push(u)
    }

    removeEdge(u: number, v: number) {
        this.adjList[u] = this.adjList[u].filter(value => value !== v)
        this.adjList[v] = this.adjList[v].filter(value => value !== u)
    }

    printGraph() {
        console.log("Adjacency List ", this.adjList);
        for (let vertex in this.adjList) {
            console.log(`${vertex} -> ${this.adjList[vertex].join(',')}`);

        }
    }
}


const g = new Graph();

g.addEdge(0, 1);
g.addEdge(0, 4);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(2, 3);
g.addEdge(3, 4);

g.printGraph();
