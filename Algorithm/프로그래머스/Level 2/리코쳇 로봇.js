function solution(board) {
  const graph = board.map((item) => item.split(''));

  const getIndex = (c) => {
    for (let i = 0; i < graph.length; i++) {
      for (let j = 0; j < graph[i].length; j++) {
        if (graph[i][j] === c) {
          return [i, j];
        }
      }
    }
  };

  const start = getIndex('R');
  const end = getIndex('G');

  function bfs(start, end, graph) {
    const visited = graph.map((row) => row.map((item) => false));
    const q = [start];

    const directions = ['up', 'down', 'left', 'right'];
    const distances = graph.map((row) => row.map((item) => 0));

    while (q.length > 0) {
      const [startX, startY] = q.shift();
      visited[startX][startY] = true;

      for (let i = 0; i < directions.length; i++) {
        let nx = startX,
          ny = startY;

        switch (directions[i]) {
          case 'up':
            for (let i = startX; i >= 0; i--) {
              nx = i;
              if (i === 0 || graph[i - 1][startY] === 'D') break;
            }
            break;
          case 'down':
            for (let i = startX; i < graph.length; i++) {
              nx = i;
              if (i === graph.length - 1 || graph[i + 1][startY] === 'D') break;
            }
            break;
          case 'left':
            for (let i = startY; i >= 0; i--) {
              ny = i;
              if (i === 0 || graph[startX][i - 1] === 'D') break;
            }
            break;
          case 'right':
            for (let i = startY; i < graph[0].length; i++) {
              ny = i;
              if (i === graph[0].length - 1 || graph[startX][i + 1] === 'D')
                break;
            }
            break;
        }

        if (visited[nx][ny] === false) {
          distances[nx][ny] =
            distances[nx][ny] === 0
              ? distances[startX][startY] + 1
              : Math.min(distances[startX][startY] + 1, distances[nx][ny]);
          q.push([nx, ny]);

          if (nx === end[0] && ny === end[1]) {
            return distances[nx][ny];
          }
        }
      }
    }
    return -1;
  }

  return bfs(start, end, graph);
}
