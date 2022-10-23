const solution = (elements) => {
  const answer = new Set();
  const len = elements.length;

  for (let i = 1; i <= len; i++) {
    for (let j = 0; j < len; j++) {
      if (j + i > len) {
        answer.add(
          [...elements.slice(0, j + i - len), ...elements.slice(j)].reduce(
            (a, b) => a + b,
            0
          )
        );
      } else {
        answer.add(elements.slice(j, j + i).reduce((a, b) => a + b, 0));
      }
    }
  }

  return answer.size;
};
