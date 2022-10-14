const solution = (want, number, discount) => {
  let answer = 0;
  const fruits = {};

  want.forEach((fruit, idx) => {
    fruits[fruit] = number[idx];
  });

  for (let i = 0; i <= discount.length - 10; i++) {
    const tempFruits = { ...fruits };

    discount.slice(i, i + 10).forEach((item) => {
      if (tempFruits[item]) {
        tempFruits[item] -= 1;
      }
    });

    if (Object.values(tempFruits).every((count) => count === 0)) {
      answer += 1;
    }
  }
  return answer;
};
