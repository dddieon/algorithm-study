// 문제 : https://www.acmicpc.net/problem/15649
// N-M 문제는 총 4가지가 있다 *모두 백트래킹

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "10.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = (input[0].split(" ").map(i => Number(i)));

function solution(n, m) {
    const array = []
    for (let i = 1; i <= n; i++) {
      array.push(i)
    }
    const temp = [];
    const visited = new Array(n).fill(false); // 1. 목표: visited = [true true true true] || 이유: 완료된 애들 짜르게
  
    순열(0)
  
    //순서가 다르면 다른 값 -> 순열
    function 순열(L) {
      if (L == m) {
        console.log(temp.join(" ")) // (답을 쪼개서 출력중)
        return
      }
  
      // 숫자 중복 선택은 제외
      for (let i = 0; i < n; i++) {　// == 가로로 뻗는 가닥 ==
        if (!visited[i]) {
          temp.push(array[i])
          visited[i] = true
          console.log("TRUE", visited) 
          순열(i + 1);
          visited[i] = false
          console.log("FALSE", visited)
          temp.pop()
        }
      }
    }
  }
  
  solution(N, M)