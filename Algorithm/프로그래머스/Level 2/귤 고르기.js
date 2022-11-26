const solution = (k, tangerine) => {
  const count = {};

  tangerine.forEach((size) => {
    count[size] = count[size] ? count[size] + 1 : 1;
  });

  tangerine.sort((a, b) => {
    if (count[a] > count[b]) {
      return -1;
    } else if (count[a] < count[b]) {
      return 1;
    } else {
      return b - a;
    }
  });

  const pickedTangerineSet = new Set(tangerine.slice(0, k));
  return pickedTangerineSet.size;
};
