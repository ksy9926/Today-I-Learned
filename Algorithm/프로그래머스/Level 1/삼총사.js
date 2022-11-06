const solution = (number) => {
  const getCombination = (elements, pick) => {
    if (pick === 1) return elements.map((elem) => [elem]);

    const combinations = [];

    elements.forEach((element, index) => {
      const smallerCombinations = getCombination(
        elements.slice(index + 1),
        pick - 1
      );

      smallerCombinations.forEach((combination) => {
        combinations.push([element].concat(combination));
      });
    });
    return combinations;
  };

  const result = getCombination(number, 3);

  const answer = result
    .map((item) => item.reduce((prev, next) => prev + next))
    .filter((item) => item === 0);
  return answer.length;
};
