let input = ['a', 'b', 'c'];
let count = 0;

const permutation = (arr, count) => {
  if (count === 1) {
    return arr.map((item) => [item]);
  }

  const result = [];

  arr.forEach((target) => {
    permutation(
      arr.filter((item) => item !== target),
      count - 1
    ).forEach((permutationItem) => {
      result.push([target, ...permutationItem]);
    });
  });

  return result;
};

const result = permutation(input, 2);

console.log(result);

/**
 * [['a', 'b'], ['a', 'c'], ['b', 'c']]
 */

/**
 * ['a', 'b', 'c']
 */
