const getCombination = (str, r) => {
  if (r === 1) {
    return str.split("");
  }

  const result = [];

  for (let i = 0; i < str.length; i++) {
    const temp = str[i];
    const combination = getCombination(str.slice(i + 1), r - 1).map(
      (item) => temp + item
    );

    result.push(...combination);
  }

  return result;
};

const solution = (orders, course) => {
  const answer = [];

  course.forEach((r) => {
    const orderObj = {};
    orders
      .map((order) => order.split("").sort().join(""))
      .forEach((order) => {
        const combination = getCombination(order, r);

        combination.forEach((item) => {
          orderObj[item] = orderObj[item] ? orderObj[item] + 1 : 1;
        });
      });

    const arr = Object.entries(orderObj);

    if (arr.length !== 0) {
      arr.sort((a, b) => b[1] - a[1]);

      const max = arr[0][1];

      arr.forEach((item) => {
        if (item[1] === max && max > 1) {
          answer.push(item[0]);
        }
      });
    }
  });

  answer.sort();
  return answer;
};
