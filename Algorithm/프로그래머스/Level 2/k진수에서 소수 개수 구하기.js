const checkPrime = (num) => {
  if (num === 1) return false;

  for (let i = 2; i <= num ** 0.5; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

function solution(n, k) {
  let answer = 0;

  const ternary = n.toString(k);
  const nums = ternary.match(
    // 차례대로 case1, case2, case3, case4
    /(?<=0)[^0]+(?=0)|^[^0]+(?=0)|(?<=0)[^0]+$|^[^0]+$/g
  );

  for (let num of nums.map((num) => Number(num))) {
    if (checkPrime(num)) answer += 1;
  }

  return answer;
}

// answer: 3
const test1 = solution(437674, 3);

// answer: 2
const test2 = solution(110011, 10);

console.log(test1, test2);
