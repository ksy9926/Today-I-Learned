// 해쉬
// function solution(nums) {
//     const count = {}
//     const n = nums.length / 2

//     nums.forEach(num => {
//         count[num] = count[num] ? count[num] + 1 : 1
//     })

//     const unique = Object.keys(count).length
//     return n > unique ? unique : n;
// }

// Set 사용
function solution(nums) {
  const n = nums.length / 2;
  const ponketmon = new Set(nums);

  return n > ponketmon.size ? ponketmon.size : n;
}
