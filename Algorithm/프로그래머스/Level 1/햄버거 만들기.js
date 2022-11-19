function solution(ingredient) {
  let answer = 0;

  const stack = [];

  ingredient.forEach((current) => {
    stack.push(current);

    if (stack.slice(stack.length - 4).join("") === "1231") {
      stack.splice(stack.length - 4, 4);
      answer++;
    }
  });

  return answer;
}

// 스택
