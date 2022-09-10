const solution = (n, left, right) => {
  const answer = [];

  const start = Math.ceil((left + 1) / n) - 1;
  const end = Math.ceil((right + 1) / n);

  for (let i = start; i < end; i++) {
    for (let j = 0; j < n; j++) {
      answer.push(i > j ? i + 1 : j + 1);
    }
  }

  return answer.slice(left - start * n, right + 1 - start * n);
};
