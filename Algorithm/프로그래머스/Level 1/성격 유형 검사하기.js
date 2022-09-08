const solution = (survey, choices) => {
  let answer = "";

  const score = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  survey.forEach((item, index) => {
    const add = 4 - choices[index];

    if (add > 0) {
      score[item[0]] += add;
    }

    if (add < 0) {
      score[item[1]] -= add;
    }
  });

  answer += score.R >= score.T ? "R" : "T";
  answer += score.C >= score.F ? "C" : "F";
  answer += score.J >= score.M ? "J" : "M";
  answer += score.A >= score.N ? "A" : "N";

  return answer;
};
