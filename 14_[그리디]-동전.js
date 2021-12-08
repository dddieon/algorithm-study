// 문제: https://www.acmicpc.net/problem/11047

//첫째 줄에 N과 K가 주어진다. (1 ≤ N ≤ 10, 1 ≤ K ≤ 100,000,000)
// 둘째 줄부터 N개의 줄에 동전의 가치 Ai가 오름차순으로 주어진다. (1 ≤ Ai ≤ 1,000,000, A1 = 1, i ≥ 2인 경우에 Ai는 Ai-1의 배수)

// 출력: 첫째 줄에 K원을 만드는데 필요한 동전 개수의 최솟값을 출력한다.

// ============ 정답코드 ============

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "14.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, K] = (input[0].split(" ").map(i => Number(i)));
const coins = [];

for (let i = 0; i < N; i ++) {
  coins.push(Number(input[i + 1]));
}

coins.sort((a,b) => b - a); // 내림차순

function solution(A, K) {
  let sum = 0;
  let index = 0;
  let count = 0;
  while(sum !== K) {
    if (sum + A[index] > K) {
        index ++;
        continue;
    } else {
      sum += A[index];
      count += 1;
    }
  }
  console.log(count);
}


solution(coins, K);

