// 모든 조합
function getAllCombinations(arr) {
  const result = [];

  const f = function (prefix, arr) {
    for (let i = 0; i < arr.length; i++) {
      result.push([...prefix, arr[i]]);
      f([...prefix, arr[i]], arr.slice(i + 1));
    }
  };

  f([], arr);

  return result;
}

// n개 중 r개를 고르는 조합
function getCombinations(arr, r) {
  if (r === 1) return arr.map((item) => [item]);
  if (r === arr.length) return [arr];

  const combinations = [];

  for (let i = 0; i <= arr.length - r; i++) {
    const head = arr.slice(i, i + 1);
    const tailCombinations = getCombinations(arr.slice(i + 1), r - 1);
    tailCombinations.forEach((combination) => {
      combinations.push(head.concat(combination));
    });
  }

  return combinations;
}

const arr = [1, 3, 4];

// 모든 조합
const allCombinations = getAllCombinations(arr);
console.log(allCombinations); // [[1], [1,3], [1,3,4], [1,4], [3], [3,4], [4]]

// n개 중 r개를 고르는 조합
const r = 2;
const combinations = getCombinations(arr, r);
console.log(combinations);
