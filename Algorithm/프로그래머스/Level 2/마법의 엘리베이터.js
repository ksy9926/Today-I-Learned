const solution = (storey) => {
  let answer = 0;

  const storeySplitArr = storey.toString().split('');
  storeySplitArr.reverse();
  const storeyArr = [...storeySplitArr.map((item) => Number(item)), 0];

  for (let i = 0; i < storeyArr.length; i++) {
    const num = storeyArr[i];

    if (num > 5) {
      answer += 10 - num;
      storeyArr[i + 1] = storeyArr[i + 1] + 1;
    } else if (num === 5) {
      if (storeyArr[i + 1] >= 5) {
        answer += 10 - num;
        storeyArr[i + 1] = storeyArr[i + 1] + 1;
      } else {
        answer += num;
      }
    } else {
      answer += num;
    }
  }

  return answer;
};
