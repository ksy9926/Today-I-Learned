function bfs(start, end, graph) {
  const queue = [start];
  const visited = Array.from({ length: graph.length }, () =>
    Array(graph[0].length).fill(false)
  );
  const distances = Array.from({ length: graph.length }, () =>
    Array(graph[0].length).fill(Infinity)
  );

  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];

  visited[start[0]][start[1]] = true;
  distances[start[0]][start[1]] = 0;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < graph.length &&
        ny < graph[0].length &&
        !visited[nx][ny] &&
        graph[nx][ny] !== 'X'
      ) {
        visited[nx][ny] = true;
        distances[nx][ny] = distances[x][y] + 1;
        queue.push([nx, ny]);

        if (nx === end[0] && ny === end[1]) {
          return distances[nx][ny];
        }
      }
    }
  }

  return -1; // 도달할 수 없는 경우
}

function solution(maps) {
  const graph = maps.map((row) => row.split(''));

  function getIndex(letter) {
    for (let i = 0; i < graph.length; i++) {
      for (let j = 0; j < graph[0].length; j++) {
        if (graph[i][j] === letter) {
          return [i, j];
        }
      }
    }
    return null;
  }

  const start = getIndex('S');
  const lever = getIndex('L');
  const end = getIndex('E');

  if (!start || !lever || !end) return -1; // 올바른 시작, 레버, 출구 위치가 없는 경우

  const toLever = bfs(start, lever, graph);
  if (toLever === -1) return -1; // 레버까지 도달할 수 없는 경우

  const toEnd = bfs(lever, end, graph);
  if (toEnd === -1) return -1; // 출구까지 도달할 수 없는 경우

  return toLever + toEnd;
}
