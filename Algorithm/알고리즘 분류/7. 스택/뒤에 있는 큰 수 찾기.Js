// 정답은 맞지만 시간초과
// function solution(numbers) {
//     const answer = []
//     let max = Number.MAX_VALUE

//     for (let i=0;i<numbers.length;i++) {
//         let backLargestNum = -1;

//         if (numbers[i] > max) {
//             answer.push(-1)
//             continue
//         }

//         for (let j=i+1;j<numbers.length;j++) {
//             if (numbers[i] < numbers[j]) {
//                 backLargestNum = numbers[j]
//                 break
//             }
//         }

//         if (backLargestNum === -1) {
//             max = numbers[i]
//         }
//         answer.push(backLargestNum)
//     }
//     return answer;
// }
