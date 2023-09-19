/**
 * 프로그래머스 Level 3
 * 다이나믹 프로그래밍
 */

function solution(triangle) {
  for (let i = 0; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      if (j === 0) {
        triangle[i][j] += i === 0 ? 0 : triangle[i - 1][j];
      } else if (j === triangle[i].length - 1) {
        triangle[i][j] += triangle[i - 1][j - 1];
      } else {
        triangle[i][j] += Math.max(triangle[i - 1][j], triangle[i - 1][j - 1]);
      }
    }
  }

  return Math.max(...triangle[triangle.length - 1]);
}
