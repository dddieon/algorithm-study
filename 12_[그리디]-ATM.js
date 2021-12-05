// 문제 : https://www.acmicpc.net/problem/15649
// N-M 문제는 총 4가지가 있다 *모두 백트래킹

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "12.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

console.log(input)

const N = (input[0].split(" ").map(i => Number(i)));
const ARR = (input[1].split(" ").map(i => Number(i)));