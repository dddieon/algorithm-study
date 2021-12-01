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
  if(visited[v][cur]) {
    // console.log(v, cur, "push");
    // console.log(visited, "답에 추가할 때 ======")
    return; // 종료점: stack) [0,0,0,0,0] => [x,x,x,x,x] :: 마지막에 0이 아니고 채워져 있으면 끝
  }

  visited[v][cur] = 1;

  for (let i = 0; i < M ; i++) {
    if (visited[v][i+1] === 0) {
      visited[v][i+1] = 1;
      DFS(v, i+1);
    }
    console.log("CHECK:", visited[v+1][0] === 0, v, "=현재 v")
    if (visited[v+1][0] === 0) {
      visited[v+1][0] = 1;
      DFS(v+1, 0);
    }
    // const next = visited[v][i + 1];
    // if (next === 0) {
    //   DFS(v, cur + 1);
    // }
  }
}

DFS(0, 0);