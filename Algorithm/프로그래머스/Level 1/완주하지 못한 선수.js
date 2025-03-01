function solution(participant, completion) {
  let answer = "";
  const count = {};

  completion.forEach((name) => {
    count[name] = count[name] ? count[name] + 1 : 1;
  });

  participant.forEach((name) => {
    if (count[name]) {
      count[name] -= 1;
    } else {
      answer = name;
    }
  });

  return answer;
}
