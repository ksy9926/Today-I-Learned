// 다익스트라(Dijkstra)의 알고리즘은 그래프에서 한 정점에서 다른 모든 정점까지의 최단 경로를 찾는 데 사용되는 알고리즘입니다.
// 이 알고리즘은 음의 가중치가 없는 그래프에서 최단 경로를 찾는 데 매우 효율적입니다.
// 다익스트라 알고리즘은 우선순위 큐를 사용하여 구현할 수 있으며, 주로 다음과 같은 단계로 진행됩니다.

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    // Initialize distances and priority queue
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // As long as there are nodes in the priority queue
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;

      if (smallest === finish) {
        // We found the shortest path, now build the path array
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;

          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

// 그래프 생성 및 간선 추가
const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

graph.addEdge('A', 'B', 2);
graph.addEdge('A', 'C', 1);
graph.addEdge('B', 'D', 3);
graph.addEdge('B', 'E', 1);
graph.addEdge('C', 'D', 1);
graph.addEdge('D', 'E', 2);

// 다익스트라 알고리즘 실행
const shortestPath = graph.dijkstra('A', 'E');
console.log(shortestPath); // ['A', 'C', 'D', 'E']
