//문제: https://www.acmicpc.net/problem/1260
//난이도 : 실버II

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "1.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m, v] = input[0].split(" ").map(Number);
let graph = new Array(n + 1);
for (let i = 0; i < graph.length; i++) {
  graph[i] = [];
}
for (let i = 0; i < m; i++) {
  let [from, to] = input[i + 1].split(" ").map(Number);
  console.log("from->", from, "to->", to);
  graph[from].push(to);
  graph[to].push(from);
}
graph.forEach((element) => {
  element.sort((a, b) => a - b);
});
console.log(graph, "graph") // 각 node 별 연결된 node들의 집합 -> 연결리스트: [ [], [ 2, 3, 4 ], [ 1, 4 ], [ 1, 4 ], [ 1, 2, 3 ] ] 

let visited = new Array(n + 1).fill(0);
console.log(visited, "visited")
let answer_dfs = [];

// DFS : 갈때까지 간다 -> [스택]
function DFS(v) { 
  if (visited[v]) return; // 종료점: stack) [0,0,0,0,0] => [x,x,x,x,x] :: 마지막에 0이 아니고 채워져 있으면 끝
  visited[v] = 1;
  answer_dfs.push(v);
  console.log(answer_dfs, "answer dfs")
  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];
    if (visited[next] === 0) {
      DFS(next);
    }
  }
}

DFS(v);
// DFS(v); // 매개변수 v = 시작점 위치
console.log(answer_dfs.join(" "));

let 정답 = [];
visited.fill(0);
// BFS : 스택에 최상단을 쌓고, 방문하지 않은 인접노드가 없으면 스택제거 -> [큐]
function BFS(v) {
  let queue = [v];
  while (queue.length) {
    console.log(v, ":", queue, "now queue=======")
    let x = queue.shift(); 
    if (visited[x] === 1) {
      continue;
    }
    visited[x] = 1;
    정답.push(x);
    for (let i = 0; i < graph[x].length; i++) {
      let next = graph[x][i]; // 갈 수 있는데 까지 간다
      console.log(next, "next");
      if (visited[next] === 0) {
        console.log(v, ":", 정답, "[정답]")
      }
    }
  }
}
BFS(v); // 매개변수: 시작점
console.log(정답.join(" "));