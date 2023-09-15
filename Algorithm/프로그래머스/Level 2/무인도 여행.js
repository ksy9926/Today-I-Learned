const solution = (maps) => {
  const answer = [];
  const graph = maps.map((item) => item.split(''));

  const dfs = (x, y, num) => {
    let sum = Number(num);
    const move = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    graph[x][y] = 'X';

    for (let i = 0; i < 4; i++) {
      const nx = x + move[i][0];
      const ny = y + move[i][1];

      if (
        nx < 0 ||
        ny < 0 ||
        nx >= graph.length ||
        ny >= graph[0].length ||
        graph[nx][ny] === 'X'
      ) {
        continue;
      } else {
        sum += dfs(nx, ny, graph[nx][ny]);
      }
    }

    return sum;
  };

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[0].length; j++) {
      if (graph[i][j] === 'X') continue;

      const test = dfs(i, j, graph[i][j]);
      answer.push(test);
    }
  }

  return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
};
