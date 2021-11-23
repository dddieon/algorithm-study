// 문제: https://www.notion.so/89594bdc47324540b0c0df8d640768d9


// - 다중 for 문의 한계와 dfs를 쓰는 이유
// :: for 문은 몇 번 반복할지를 n번 써야하는데, 재사용 불가능한 코드가 된다 ::


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "4.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);

let answer = [];
let tmp = Array.from({length: M}, () => 0);

console.log(M, "M", tmp)

function DFS(v){ // v의 초기값
  if (v === M) { // 부분집합 완성 조건을 깊게 생각해보자!
    answer.push(tmp);
  } else {
    for (let i = 1; i <= N ; i++) {
      console.log(i, v, "i-v")
      tmp[v] = [i, v];
      DFS(v+1);
    }
  }
}

DFS(0);
console.log(answer, "answer")