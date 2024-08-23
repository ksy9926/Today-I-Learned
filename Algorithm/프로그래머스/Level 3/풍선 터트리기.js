// 타겟 넘버를 기준으로 왼쪽과 오른쪽 둘 다 자신보다 작은 수가 있는 경우 마지막으로 남길 수 없다.
// 양끝에 있는 수는 항상 터트릴 수 있다.
// 1. 앞쪽부터 차례로 가장 작은 값을 갱신하며 순회
// 1-1. 가장 작은 값이 아닌 경우 왼쪽에 본인보다 작은 수가 있다는 것이다. 오른쪽은 알 수 없으므로 우선 대기숫자에 추가
// 1-2. 가장 작은 값인 경우 정답을 추가해준다. 갱신될 때 대기숫자가 존재하는 경우 이 대기숫자들은 양 옆에 본인보다 작은 수가 있으므로 터트릴수 없기에 비워준다.
// 2. 대기숫자들을 뒤쪽부터 차례로 가장 작은 값을 갱신하며 순회
// 2-1. 이미 자신보다 왼쪽에는 작은 수가 있으므로 본인이 최소값일때만 정답에 추가

function solution(a) {
  let answer = 0;
  let smallestNumber = Infinity;
  let watingNumbers = [];

  a.forEach((num) => {
    if (num < smallestNumber) {
      answer += 1;
      smallestNumber = num;

      if (watingNumbers.length > 0) {
        watingNumbers = [];
      }
    } else {
      watingNumbers.push(num);
    }
  });

  let smallestNumber2 = Infinity;
  for (let i = watingNumbers.length - 1; i >= 0; i--) {
    const num = watingNumbers[i];
    if (num < smallestNumber2) {
      answer += 1;
      smallestNumber2 = num;
    }
  }

  return answer;
}
