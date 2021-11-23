// 문제: https://www.acmicpc.net/problem/16173

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "5.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = Number(input[0].split(" "));

let list = [];
for (let i = 0; i < N; i++) {
  list[i] = input[i + 1].split(" ").map(Number);
}

console.log(N, list)

var a = 0;
var b = 0;

function solution(a, b) {
  console.log("a=",a,"b=",b);
  if (!list[a][b]) {
    console.log("안돼")
    return;
  }
  
  var 갈수있음 = list[a][b]; // 1
  if (b + 갈수있음 === N-1 && a + 갈수있음 === N-1) { // 행감&열감 = list[2,2] 
    // 정답
    console.log("hing")
  } else {
    console.log([a],[b + 갈수있음], "===" ,[a + 갈수있음],[b], "가능함")
    //list[a][b + 갈수있음];
    try {
      solution(a, b + 갈수있음); // solution(0, 1)
    } catch (e) {
    }
    try {
      solution(b+갈수있음, a); // solution(0, 1)
    } catch (e) {
    }
  }
}

solution(a, b);