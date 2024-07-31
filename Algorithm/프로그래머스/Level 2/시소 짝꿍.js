// 100: [100, 150, 200]
// 200: [100, 150, 200, 300, 400]
// 300

// (400, 600, 800) => (100, 133, 200) (150, 200, 300) (200, 266, 400)
// (600, 900, 1200) => (150, 200, 300) (225, 300, 450)

const hashMap = {};

const possibleWeights = [1 / 2, 2 / 3, 3 / 4, 1, 4 / 3, 3 / 2, 2];

function solution(weights) {
  let answer = 0;

  weights.forEach((w) => {
    hashMap[w] = hashMap[w] ? hashMap[w] + 1 : 1;
  });

  weights.forEach((w) => {
    possibleWeights.forEach((ratio) => {
      const calculatedWeight = w * ratio;

      if (hashMap[calculatedWeight] && hashMap[calculatedWeight] > 0) {
        if (ratio === 1) {
          answer += hashMap[calculatedWeight] - 1;
        } else {
          answer += hashMap[calculatedWeight];
        }
      }
    });
    hashMap[w] -= 1;
  });

  return answer;
}
