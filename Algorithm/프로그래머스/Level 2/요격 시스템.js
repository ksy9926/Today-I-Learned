function solution(targets) {
  var answer = 0;
  targets.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < targets.length; i++) {
    answer++;
    const [x, y] = targets[i];
    let j = i + 1;

    while (j < targets.length && targets[j][0] < y) {
      i++;
      j++;
    }
  }
  return answer;
}
