/**
 * 프로그래머스 Level 2.
 * 수학
 */

const getCommonDivisor = (arr1, arr2) => {
  // Math.max와 Math.min의 경우 배열의 요소가 많을 경우 에러가 발생한다.
  // 배열으 요소가 대략 100만 개를 넘어갈 경우 정렬이나 반복문 사용을 권장.
  // const minNumber = Math.min(...arr1)
  const minNumber = arr1[0];

  for (let i = minNumber; i > 1; i--) {
    if (
      arr1.every((number) => number % i === 0) &&
      arr2.every((number) => number % i !== 0)
    ) {
      return i;
    }
  }

  return 0;
};

function solution(arrayA, arrayB) {
  arrayA = arrayA.sort((a, b) => a - b);
  arrayB = arrayB.sort((a, b) => a - b);

  const commonDivisors1 = getCommonDivisor(arrayA, arrayB);
  const commonDivisors2 = getCommonDivisor(arrayB, arrayA);

  return Math.max(commonDivisors1, commonDivisors2);
}
