function solution(progresses, speeds) {
  const answer = [];
  let today = 1;

  const days = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );

  days.forEach((day) => {
    if (answer.length && day <= today) {
      answer[answer.length - 1] += 1;
    } else {
      answer.push(1);
      today = day;
    }
  });

  return answer;
}
