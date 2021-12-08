// 문제: https://www.acmicpc.net/problem/14888

// 첫째 줄에 수의 개수 N(2 ≤ N ≤ 11)가 주어진다. 둘째 줄에는 A1, A2, ..., AN이 주어진다. (1 ≤ Ai ≤ 100) 셋째 줄에는 합이 N-1인 4개의 정수가 주어지는데, 차례대로 덧셈(+)의 개수, 뺄셈(-)의 개수, 곱셈(×)의 개수, 나눗셈(÷)의 개수이다. 

// 첫째 줄에 만들 수 있는 식의 결과의 최댓값을, 둘째 줄에는 최솟값을 출력한다. 연산자를 어떻게 끼워넣어도 항상 -10억보다 크거나 같고, 10억보다 작거나 같은 결과가 나오는 입력만 주어진다. 또한, 앞에서부터 계산했을 때, 중간에 계산되는 식의 결과도 항상 -10억보다 크거나 같고, 10억보다 작거나 같다.


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "11.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = (input[0].split(" ").map(i => Number(i)));
const ARR = (input[1].split(" ").map(i => Number(i)));
const BUHO = (input[2].split(" ").map(i => Number(i)));

let CASE = [];

function solution(n, numbers) {
  const array = []
  for (let i = 0; i < n.length; i++) {
    array.push(n[i])
  }

  let temp = [];
  const visited = new Array(n.length).fill(false); // 1. 목표: visited = [true true true true] || 이유: 완료된 애들 짜르게

  순열(0)

  //순서가 다르면 다른 값 -> 순열
  function 순열() {
    if (temp.length === n.length) {
      CASE = [...CASE, [...temp]];
      return // -------- * 로 이동
    }

    // 숫자 중복 선택은 제외
    for (let i = 0; i < n.length; i++) {　// == 가로로 뻗는 가닥 ==
      if (!visited[i]) { // == 이거 때문에 백트래킹인가? ==
        temp = [...temp, array[i]];
        visited[i] = true
        순열();
        visited[i] = false // ------- *
        temp.pop() // 바로 전 노드로 돌아가기 위해 마지막 temp만 지운다
                  // 전전 노드로 돌아가
      }
    }
  }
  
  const filtered = CASE.reduce((unique, item) => {
    var arr = JSON.stringify(unique);
    return arr.includes(JSON.stringify(item)) ? unique : [...unique, item];
  }, []);

  console.log(filtered)
}

solution(BUHO, ARR);
