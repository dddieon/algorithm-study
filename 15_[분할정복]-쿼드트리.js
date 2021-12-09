//문제: https://www.acmicpc.net/problem/1992

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "15.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = (Number(input[0]));

const rows = [];
for (let i =1; i <= N; i++) {
  rows.push(input[i].split("").map(i => +i));
}

console.log(rows, "rows")
let answer = "";

function quad(y, x, size) {
  const start = rows[y][x];
  for (let i = 0; i < size; i ++) {
    for (let j = 0; j < size; j++) {
      if (y + i > 0 && x + j > 0) {
        if (rows[y + i][x + j] !== start) {
          answer += "(";
          quad(y, x, size / 2); //1
          quad(y, x + size / 2, size / 2); //2
          quad(y + size / 2, x, size / 2); //3
          quad(y + size / 2, x + size / 2, size / 2); //4
          answer += ")";
          return;
        }
      }
    }
  }
  answer += start;
}

quad(0, 0, N);
console.log(answer);