function solution(a, b, n) {
  let answer = 0;

  while (a <= n) {
    n = n - a + b;
    answer += b;
  }

  return answer;
}
