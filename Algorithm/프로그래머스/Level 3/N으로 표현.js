const solution = (n, vertex) => {
  const visited = Array.from({ length: n + 1 }, () => 0);
  const distances = Array.from({ length: n + 1 }, () => 0);
  const graph = Array.from({ length: n + 1 }, () => []);
  const q = [1];

  visited[1] = 1;

  vertex.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a);
  });

  while (q.length > 0) {
    const currentNode = q.shift();

    graph[currentNode].forEach((nextNode) => {
      if (visited[nextNode] === 0) {
        visited[nextNode] = 1;
        distances[nextNode] = distances[currentNode] + 1;
        q.push(nextNode);
      }
    });
  }

  const max = Math.max(...distances);

  return distances.filter((item) => item === max).length;
};

// bfs
