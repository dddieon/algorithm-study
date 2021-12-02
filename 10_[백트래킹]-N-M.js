// 문제 : https://www.acmicpc.net/problem/15652
// N-M 문제는 총 4가지가 있다 *모두 백트래킹

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "10.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = (input[0].split(" ").map(i => Number(i)));

const array = [];

let list = Array.from({length: +N}, (_, i) => i+1);

let visited = Array.from({length: N}, () => {
  let temp = [];
  for (let i = 0; i < N; i++) {
    temp.push(0);
  }
  return temp;
});

console.log(visited, "원본")

// DFS : 갈때까지 간다 -> [스택]
function DFS (v, cur) { 
  console.log(v, "NOW")
  if(visited[v][cur]) {
    console.log(v, cur, "push");
    // console.log(visited, "답에 추가할 때 ======")
    return; // 종료점: stack) [0,0,0,0,0] => [x,x,x,x,x] :: 마지막에 0이 아니고 채워져 있으면 끝
  }

  for (let i = 0; i < N; i++) {
    if (!visited[v][i]) {
      console.log(v, i)
      visited[v][i] = 1
      DFS(v, i)
    }
  }
}

DFS(0, 0);
DFS(1, 0);
DFS(2, 0);
DFS(3, 0);
console.log("visit", visited)