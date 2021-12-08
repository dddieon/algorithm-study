// 문제 : https://www.acmicpc.net/problem/11399
// * 최적해를 구하는 그리디 알고리즘중에서 가장 쉬운 문제 수준

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "12.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = (input[0].split(" ").map(i => Number(i)));
const ARR = (input[1].split(" ").map(i => Number(i)));

function solution(arr) {
  const ORIGIN_ARR_WITH_INDEX = arr.map((item) => item);
  const SORTED = ORIGIN_ARR_WITH_INDEX.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else if (a === b) {
      return 0;
    }
  })

  const WAIT_TIME_LIST = [0];

  SORTED.forEach((item, index) => {
    WAIT_TIME_LIST[index + 1] = WAIT_TIME_LIST[index] + item;
  })

  const SUM = WAIT_TIME_LIST.reduce((a,b) => ( a + b ), 0);

  console.log(SUM)
}

solution(ARR);