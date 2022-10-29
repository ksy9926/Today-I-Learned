const solution = (order) => {
  let answer = 0;
  const mainContainer = new Array(order.length);
  const subContainer = [];

  order.forEach((item, index) => {
    mainContainer[item - 1] = index + 1;
  });

  const checkOrder = (item) => {
    if (item === answer + 1) {
      answer += 1;
      while (
        subContainer.length > 0 &&
        subContainer[subContainer.length - 1] === answer + 1
      ) {
        answer += 1;
        subContainer.pop();
      }
    } else if (
      subContainer.length > 0 &&
      subContainer[subContainer.length - 1] === answer + 1
    ) {
      subContainer.pop();
      answer += 1;
      checkOrder(item);
    } else {
      subContainer.push(item);
    }
  };

  mainContainer.forEach((item) => {
    checkOrder(item);
  });

  return answer;
};
