export function getNumberIntervals(intervals) {
  //只允許傳入二維陣列，且每個子陣列只能有兩個數字，且都是數字，且不可為空陣列
  if (
    !Array.isArray(intervals) ||
    intervals.some(
      (subArr) =>
        !Array.isArray(subArr) ||
        subArr.length !== 2 ||
        subArr.some((el) => typeof el !== "number")
    ) ||
    !intervals.length
  ) {
    return { overlap: [], notInclude: [[0, 20]] };
  }
  //依照每個子陣列的第一個數字排序
  intervals.sort((a, b) => a[0] - b[0]);
  const overlap = [],
    notInclude = [];
  let flag = 0,
    coverRight = intervals[0][1];

  //處理第一個子陣列的左邊界
  if (intervals[0][0] > 0) {
    notInclude.push([0, intervals[0][0] - 1]);
  }
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > coverRight) {
      //沒有連續的部分
      if (coverRight + 1 !== intervals[i][0]) {
        notInclude.push([coverRight + 1, intervals[i][0] - 1]);
      }
      coverRight = intervals[i][1];
    } else {
      //有連續的部分
      if (intervals[i][0] > flag) {
        //有重疊的部分
        overlap.push([intervals[i][0], coverRight]);
      }
      flag = coverRight;
      coverRight = Math.max(coverRight, intervals[i][1]);
    }
  }
  //處理最後一個子陣列的右邊界
  if (intervals[intervals.length - 1][1] < 20) {
    notInclude.push([intervals[intervals.length - 1][1] + 1, 20]);
  }

  return { overlap, notInclude };
}

// 範例
// const intervals = [
//   [6, 11],
//   [5, 8],
//   [17, 20],
//   [7, 7],
//   [14, 17],
// ];
// console.log(getNumberIntervals(intervals));
// {
//   overlap: [ [ 6, 8 ], [ 17, 17 ] ],
//   notInclude: [ [ 0, 4 ], [ 12, 13 ] ]
// }
