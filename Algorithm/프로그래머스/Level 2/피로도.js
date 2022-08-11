const permutation = (arr, num) => {
  const res = [];

  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const permutations = permutation(rest, num - 1);
    const attach = permutations.map((permutation) => [v, ...permutation]);

    res.push(...attach);
  });

  return res;
};

const solution = (k, dungeons) => {
  let answer = 0;

  const permutations = permutation(dungeons, dungeons.length);

  for (let permutation of permutations) {
    let tempK = k;
    let tempAnswer = 0;

    permutation.forEach(([max, cost]) => {
      if (tempK >= max) {
        tempK -= cost;
        tempAnswer += 1;
      }
    });

    answer = tempAnswer > answer ? tempAnswer : answer;
  }

  return answer;
};
