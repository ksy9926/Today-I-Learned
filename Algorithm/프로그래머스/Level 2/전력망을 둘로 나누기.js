function solution(n, wires) {
  let answer = Infinity;
  const graph = {};

  const getConnectionCount = (current, except) => {
    let count = graph[current].filter((item) => item !== except).length;

    graph[current]
      .filter((item) => item !== except)
      .forEach((item) => {
        count += getConnectionCount(item, current);
      });

    return count;
  };

  wires.forEach((wire) => {
    const first = wire[0];
    const second = wire[1];

    graph[first] = graph[first] ? [...graph[first], second] : [second];
    graph[second] = graph[second] ? [...graph[second], first] : [first];
  });

  wires.forEach((wire) => {
    const first = wire[0];
    const second = wire[1];

    const cutCount = Math.abs(
      getConnectionCount(first, second) - getConnectionCount(second, first)
    );
    answer = Math.min(answer, cutCount);
  });

  return answer;
}
