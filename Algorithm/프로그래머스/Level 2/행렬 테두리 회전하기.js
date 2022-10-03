function solution(rows, columns, queries) {
  const rotate = (query) => {
    const [x1, y1, x2, y2] = query;

    const temp = graph[x1 - 1][y1 - 1];
    let min = temp;

    for (let i = x1; i < x2; i++) {
      graph[i - 1][y1 - 1] = graph[i][y1 - 1];
      min = Math.min(min, graph[i - 1][y1 - 1]);
    }

    for (let i = y1; i < y2; i++) {
      graph[x2 - 1][i - 1] = graph[x2 - 1][i];
      min = Math.min(min, graph[x2 - 1][i - 1]);
    }

    for (let i = x2; i > x1; i--) {
      graph[i - 1][y2 - 1] = graph[i - 2][y2 - 1];
      min = Math.min(min, graph[i - 1][y2 - 1]);
    }

    for (let i = y2; i > y1; i--) {
      graph[x1 - 1][i - 1] = graph[x1 - 1][i - 2];
      min = Math.min(min, graph[x1 - 1][i - 1]);
    }

    graph[x1 - 1][y1] = temp;
    answer.push(min);
  };

  const answer = [];
  let graph = Array.from({ length: rows }, () => new Array(columns).fill(0));

  graph = graph.map((row, rowIdx) =>
    row.map((col, colIdx) => columns * rowIdx + colIdx + 1)
  );

  queries.forEach((query) => {
    rotate(query);
  });

  return answer;
}
