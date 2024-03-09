function solution(data, col, row_begin, row_end) {
  data.sort((a, b) => {
    if (a[col - 1] === b[col - 1]) {
      return b[0] - a[0];
    } else {
      return a[col - 1] - b[col - 1];
    }
  });

  const s_arr = [];

  for (let i = row_begin; i <= row_end; i++) {
    const s = data[i - 1];

    s_arr.push(s.reduce((acc, cur) => acc + (cur % i), 0));
  }

  return s_arr.reduce((acc, cur) => acc ^ cur);
}
