// const fs = `4
// 1 3
// 2 5
// 3 5
// 6 7`;
// var input = fs.split('\n');

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const lines = input.slice(1).map((line) => line.split(' ').map(Number));

// 선을 시작점 기준으로 정렬
lines.sort((a, b) => a[0] - b[0]);

let answer = 0;
let [start, end] = lines[0];

for (let i = 1; i < N; i++) {
  const [x, y] = lines[i];

  if (x > end) {
    // 새로운 선분이 이전 선분과 겹치지 않는 경우
    answer += end - start;
    [start, end] = [x, y];
  } else {
    // 선분이 겹치는 경우, 끝점만 업데이트
    end = Math.max(end, y);
  }
}

// 마지막 선분 처리
answer += end - start;

console.log(answer);
