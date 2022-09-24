const splitBalancedPair = (p) => {
  const stack = [p[0]];

  for (let i = 1; i < p.length; i++) {
    if (stack.length === 0) {
      return [p.slice(0, i), p.slice(i)];
    }

    if (stack[stack.length - 1] !== p[i]) {
      stack.pop();
    } else {
      stack.push(p[i]);
    }
  }

  return [p, ""];
};

const checkRightPair = (p) => {
  const stack = [];

  for (let i = 0; i < p.length; i++) {
    if (stack.length !== 0 && stack[stack.length - 1] === "(" && p[i] === ")") {
      stack.pop();
    } else {
      stack.push(p[i]);
    }
  }

  return stack.length === 0;
};

const solution = (p) => {
  const Step1And2 = (str) => {
    // Step 1
    if (str === "" || checkRightPair(str)) {
      return str;
    }

    // Step 2
    const [u, v] = splitBalancedPair(str);

    if (checkRightPair(u)) {
      return u + Step1And2(v);
    }

    return (
      "(" +
      Step1And2(v) +
      ")" +
      u
        .split("")
        .map((item) => (item === "(" ? ")" : "("))
        .slice(1, u.length - 1)
        .join("")
    );
  };

  const answer = Step1And2(p);
  return answer;
};
