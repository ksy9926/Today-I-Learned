const dp = [0, 1, 2];

const dfs = (n) => {
  if (dp[n]) {
    return dp[n];
  }

  const result1 = dfs(n - 1);
  const result2 = dfs(n - 2);

  dp[n] = (result1 + result2) % 1234567;

  return (result1 + result2) % 1234567;
};

const solution = (n) => {
  const result = dfs(n);

  return result % 1234567;
};
