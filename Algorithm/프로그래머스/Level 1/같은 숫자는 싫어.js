function solution(arr) {
  const answer = [];

  arr.forEach((n) => {
    if (answer.length === 0) {
      answer.push(n);
    } else if (answer[answer.length - 1] !== n) {
      answer.push(n);
    }
  });
  return answer;
}
