// 투포인터는 보통 두 개의 포인터를 시작점과 끝점 또는 특정 조건을 만족하는 범위 내에서 움직이며 답을 구하는 기법입니다.
// 일반적으로 연속된 부분이나 특정 조건을 만족하는 부분을 찾아내는 데 효과적입니다.
// 투포인터 기법의 동작 원리:
// 초기화: 두 개의 포인터를 배열의 시작과 끝에 배치하거나, 시작 지점과 한 지점으로 설정합니다.
// 조건 비교 및 이동:
// 조건이 충족되지 않으면, 포인터 중 하나 또는 둘 다를 이동시킵니다.
// 포인터를 이동하면서 조건을 만족하는지 반복적으로 체크합니다.
// 결과 반환: 조건이 충족되면 결과를 반환하고, 그렇지 않으면 반복을 계속합니다.
// 투포인터 기법은 배열이나 문자열에서 특정 조건을 만족하는 구간을 찾는 데 유용한 알고리즘 기법입니다.
// 두 개의 포인터를 사용하여 탐색 범위를 줄여가면서 문제를 효율적으로 해결할 수 있습니다.

// 예제 1: 정렬된 배열에서 두 수의 합이 특정 값이 되는 경우 찾기
function twoSumSorted(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) {
      return [left, right]; // 두 수의 인덱스를 반환
    } else if (sum < target) {
      left++; // 합이 작으면 왼쪽 포인터를 오른쪽으로 이동
    } else {
      right--; // 합이 크면 오른쪽 포인터를 왼쪽으로 이동
    }
  }

  return null; // 합이 target이 되는 두 수가 없을 경우
}

// 사용 예시
const arr = [1, 2, 3, 4, 6];
const target = 6;
console.log(twoSumSorted(arr, target)); // 출력: [1, 3] (2 + 4 = 6)

// 예제 2: 특정 합이 주어진 연속된 부분 배열 찾기
function subarraySum(arr, target) {
  let left = 0;
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    // sum이 target을 넘으면, left 포인터를 움직여서 줄임
    while (sum > target && left <= right) {
      sum -= arr[left];
      left++;
    }

    if (sum === target) {
      return [left, right]; // 부분 배열의 시작과 끝 인덱스를 반환
    }
  }

  return null; // target과 합이 일치하는 부분 배열이 없을 경우
}

// 사용 예시
const arr2 = [1, 2, 3, 7, 5];
const target2 = 12;
console.log(subarraySum(arr2, target2)); // 출력: [2, 4] (3 + 7 + 2 = 12)
