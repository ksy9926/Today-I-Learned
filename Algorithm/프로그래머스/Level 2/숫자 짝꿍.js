const solution = (X, Y) => {
  const count = {};
  const both = [];

  for (let i = 0; i < X.length; i++) {
    count[X[i]] = count[X[i]] ? count[X[i]] + 1 : 1;
  }

  for (let j = 0; j < Y.length; j++) {
    if (count[Y[j]]) {
      count[Y[j]] -= 1;
      both.push(Y[j]);
    }
  }

  const answer = both.length === 0 ? "-1" : both.sort((a, b) => b - a).join("");
  return answer.startsWith("0") ? "0" : answer;
};
