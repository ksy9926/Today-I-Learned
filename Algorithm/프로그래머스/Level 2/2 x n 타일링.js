// fibonacci 풀이 1
const dp = [0, 1, 2, 3];

const fibonacci = (n) => {
  if (dp[n]) {
    return dp[n];
  }

  for (let i = 4; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
  }

  return dp[n];
};

const solution = (n) => {
  return fibonacci(n);
};

// fibonacci 풀이 2
const solution2 = (n) => {
  let prev = 0;
  let curr = 1;

  for (let i = 1; i <= n; i++) {
    [curr, prev] = [(curr + prev) % 1000000007, curr];
  }

  return curr;
};
