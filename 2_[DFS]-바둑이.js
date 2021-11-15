//# 부분집합 #DFS

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "2.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [LIMIT, N] = input[0].split(" ").map(Number);

console.log(N, "N!")
let list = [];
for (let i = 0; i < N; i++) {
  list[i] = input[i + 1].split(" ").map(Number);
}

list = list.flat();

let array = [];
let cur = Array.from({length: N}, () => 0);

function DFS(v){ // v의 초기값 = root 줄의 순서 = 1
  if (v === N+1) {
    let temp = 0;
    for (let i = 0; i < cur.length; i ++) {
      if (cur[i] === 1) {
        temp += list[i];
      }
    }
    array.push(temp);
  } else {
    // o
    console.log("cur---", cur)
    cur[v-1] = 1;
    DFS(v+1);
    // x
    cur[v-1] = 0;
    DFS(v+1);
  }
}

DFS(1);
array = array.filter(i => i < LIMIT);
console.log(Math.max(...array))