const hanoi = (n, current, middleStep, target) => {
  if (n === 1) {
    return [[current, target]];
  }

  const step1 = hanoi(n - 1, current, target, middleStep);
  const step2 = hanoi(1, current, middleStep, target);
  const step3 = hanoi(n - 1, middleStep, current, target);

  const result = [].concat(step1, step2, step3);

  return result;
};

const solution = (n) => {
  return hanoi(n, 1, 2, 3);
};
