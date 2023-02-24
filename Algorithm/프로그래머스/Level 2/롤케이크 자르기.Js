function solution(topping) {
  let answer = 0;

  const a = { size: 0 };
  const b = {};

  topping.forEach((item) => {
    b[item] = b[item] ? b[item] + 1 : 1;
  });

  b.size = Object.keys(b).length;

  for (let i = 0; i < topping.length; i++) {
    const toppingType = topping[i];

    if (a[toppingType]) {
      a[toppingType] = a[toppingType] + 1;
    } else {
      a[toppingType] = 1;
      a.size += 1;
    }

    b[toppingType] = b[toppingType] - 1;
    if (b[toppingType] === 0) {
      delete b[toppingType];
      b.size -= 1;
    }

    if (a.size === b.size) {
      answer += 1;
    }
  }

  return answer;
}
