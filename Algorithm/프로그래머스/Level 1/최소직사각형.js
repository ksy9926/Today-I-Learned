function solution(sizes) {
  let width = [],
    height = [];
  let answer;

  sizes.forEach((v) => {
    width.push(v[0]);
    height.push(v[1]);
  });

  let maxValue = Math.max(...width, ...height);
  let minValue = -Infinity;

  for (let i = 0; i < sizes.length; i++) {
    if (width[i] <= height[i]) {
      minValue = Math.max(minValue, width[i]);
    } else {
      minValue = Math.max(minValue, height[i]);
    }
  }

  answer = maxValue * minValue;
  return answer;
}
