const solution = (n, computers) => {
  let answer = 0;
  const visited = Array.from({ length: n }, () => 0);

  const dfs = (i) => {
    visited[i] = 1;

    for (let j = 0; j < n; j++) {
      if (computers[i][j] === 1 && visited[j] === 0) {
        dfs(j);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      answer += 1;
      dfs(i);
    }
  }

  return answer;
};
