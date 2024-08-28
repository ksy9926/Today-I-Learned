function solution(m, n, puddles) {
  const dp = Array.from({ length: m + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );

  puddles.forEach((item) => {
    const [m, n] = item;
    dp[m][n] = -1;
  });

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 && j === 1) {
        dp[i][j] = 1;
        continue;
      }
      if (dp[i][j] === -1) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000007;
      }
    }
  }

  return dp[m][n];
}
