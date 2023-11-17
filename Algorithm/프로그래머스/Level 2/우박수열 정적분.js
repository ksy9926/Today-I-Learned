const getTrapezoidArea = (y1, y2) => {
  let result = 0;

  if (y2 > y1) {
    result = (y2 - y1) / 2 + y1;
  } else {
    result = (y1 - y2) / 2 + y2;
  }

  return result;
};

const collatz = (k) => {
  let n = 0;
  const coordinates = [];

  while (k !== 1) {
    coordinates.push(k);
    if (k % 2 === 0) {
      k = k / 2;
    } else {
      k = k * 3 + 1;
    }
    n = n + 1;
  }
  coordinates.push(k);

  return { n, coordinates };
};

function solution(k, ranges) {
  const answer = [];
  const { n, coordinates } = collatz(k);

  ranges.forEach(([a, b]) => {
    let result = 0;
    for (let i = a; i < n + b; i++) {
      result += getTrapezoidArea(coordinates[i], coordinates[i + 1]);
    }

    if (a > n + b) {
      result = -1;
    }

    answer.push(result);
  });
  return answer;
}
