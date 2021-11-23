// 문제: https://wool-pantydraco-9c6.notion.site/ae1e810a45ee4a599de16ce12160f312
// ## 동전을 주는 모든 부분집합을 구해서 최소값을 출력 => x
// 

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "3.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N] = input[0].split(" ").map(Number);
let list = input[1].split(" ").map(Number);

console.log("list", list)

let array = [];
let cur = Array.from({length: N}, () => 0);
console.log(list, cur, "list-ss")

function DFS(v){ // v의 초기값 = root 줄의 순서 = 1
  if (v === N+1) {
    let temp = 0;
    for (let i = 0; i < list.length; i ++) {
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
console.log(array, "array")
console.log(Math.min(...array))