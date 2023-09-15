function solution(sequence, k) {
  let sum = 0;
  let head = 0;
  const answer = [];

  for (let i = 0; i < sequence.length; i++) {
    sum += sequence[i];

    if (sum > k) {
      while (sum > k) {
        sum -= sequence[head];
        head++;
      }
    }

    if (sum === k) {
      answer.push([head, i]);
    }
  }

  return answer.reduce(
    (acc, cur) => (acc[1] - acc[0] > cur[1] - cur[0] ? cur : acc),
    [0, Infinity]
  );
}
