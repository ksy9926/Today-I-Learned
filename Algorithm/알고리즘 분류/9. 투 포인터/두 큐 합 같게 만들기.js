/**
 * 프로그래머스 Level 2.
 * 큐, 투 포인터
 */

function solution(queue1, queue2) {
  let answer = 0;
  let sum1 = queue1.reduce((acc, cur) => acc + cur);
  let sum2 = queue2.reduce((acc, cur) => acc + cur);
  const target = (sum1 + sum2) / 2;

  const arr = [...queue1, ...queue2];
  const maxIndex = arr.length - 1;

  const moveRight = (pointer) => {
    if (pointer === maxIndex) {
      return 0;
    }

    return pointer + 1;
  };

  let pointer1 = 0;
  let pointer2 = queue1.length - 1;

  while (sum1 !== target && pointer1 !== arr.length - 1) {
    answer++;

    if (sum1 < target) {
      pointer2 = moveRight(pointer2);
      sum1 += arr[pointer2];
    } else if (sum1 > target) {
      sum1 -= arr[pointer1];
      pointer1 = moveRight(pointer1);
    }
  }

  if (sum1 === target) return answer;

  return -1;
}

/**
 * 참고
 * https://koguri.tistory.com/108
 */

// const solution = (queue1, queue2) => {
//   let sum1 = queue1.reduce((prev, cur) => prev + cur, 0);
//   let sum2 = queue2.reduce((prev, cur) => prev + cur, 0);
//   const half = (sum1 + sum2) / 2;
//   const q = [...queue1, ...queue2];
//   let q1Pointer = 0;
//   let q2Pointer = queue1.length;

//   for (let cnt = 0; cnt < queue1.length * 3; cnt++) {
//     if (sum1 === half) {
//       return cnt;
//     }
//     sum1 =
//       sum1 > half
//         ? sum1 - q[q1Pointer++ % q.length]
//         : sum1 + q[q2Pointer++ % q.length];
//   }

//   return -1;
// };
