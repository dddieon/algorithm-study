// 문제: https://www.acmicpc.net/problem/14002
// 수열 A가 주어졌을 때, 가장 긴 증가하는 부분 수열을 구하는 프로그램을 작성하시오.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "20.txt";

let [N, A] = fs.readFileSync(filePath).toString().trim().split("\n");

N = +N;
A = A.split(" ").map(i => +i);

let result = [1];

// 1. 정답을 찾아내는 함수
function findIndex(A) {
  for (let i = 1; i < N; i++) {
    // i번째 이전에서 1) A[i]보다 작은 경우 2) 경우의 수 중 최대값 을 구한다
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (A[j] < A[i] && max < result[j]) {
        max = result[j];
      }
    }
    result[i] = max + 1;
  }

  const maxCount = Math.max(...result);
  return {
    maxCount,
    maxIndex: result.indexOf(maxCount),
    maxResult: result,
  };
}

// 2. index를 역추적해 출력값을 찾아낸다
function findAnswer({maxCount, maxIndex, maxResult}) {
  let answer = [];
  let max = maxCount;
  for (let i = maxIndex; i >= 0 ; i--) {
    if (maxResult[i] === max) {
      max = max - 1;
      answer.push(A[i]);
    }
  }
  answer = answer.reverse().join(" ");
  console.log(`${maxCount}\n${answer}`);
}

findAnswer(findIndex(A))

