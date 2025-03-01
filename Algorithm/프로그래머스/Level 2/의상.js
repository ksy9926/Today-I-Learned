function solution(clothes) {
  var answer = 1;
  const map = new Map();

  clothes.forEach(([_, type]) => {
    map.set(type, map.has(type) ? map.get(type) + 1 : 1);
  });

  for (let [key, value] of map) {
    answer *= value + 1;
  }

  return answer - 1;
}
