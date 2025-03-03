const solution = (numbers, target) => {
  let answer = 0;

  const add = (index, sum) => {
    if (index === numbers.length) {
      if (sum === target) {
        answer += 1;
      }

      return;
    }

    add(index + 1, sum + numbers[index]);
    add(index + 1, sum - numbers[index]);
  };

  add(0, 0);

  return answer;
};
