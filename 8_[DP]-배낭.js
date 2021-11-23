// 문제: https://www.acmicpc.net/problem/12865

// 냅색알고리즘
// * W =  3,4,5,6 의 무게순서대로 DP 테이블에 적용한다

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "8.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const NK = input[0].split(" ");

let N = Number(NK[0]);
let K = Number(NK[1]);

let WEIGHT = []; // 무게
let VALUE = []; // 가치

input.shift();
input.sort((a,b) => a[0]-b[0]);

for (let i = 0; i < N; i++) {
  let WV = input[i].split(" ");
  WEIGHT[i] = +WV[0];
  VALUE[i] = +WV[1];
}

const answer = cutRod();
console.log(answer);

function cutRod() {
  var r = Array.from({length: N}, () => Array(K).fill(0)); // [ 0, 0, 1, 2...
  for (let n = 0; n < N; n++) {
    let 무게 = WEIGHT[n];
    let 가치 = VALUE[n];
    for (let k = 0; k <= K; k++) {
      //물건의 무게가 k보다 클 때
      if (무게 > k) {
        if (r[n-1]) {
          r[n][k] = r[n-1][k];
        } else {
          r[n][k] = 0;
        } //k=3이고 n=4일 때를 보면 4(0) 대신 3(1)을 쓴다 
      } else {
        if (r[n-1]) {
          r[n][k] = Math.max(
            r[n - 1][k], //n번 물건 안 담는 경우
            r[n - 1][k - 무게] + 가치 //n번 물건 담는 경우
          );
        } else {
          r[n][k] = 가치;
        }
      }
    }
  }
  return Math.max(...r.flat());
}


// var a = 0;
// var b = 0;

// function solution(a, b) {
//   console.log("a=",a,"b=",b);
//   if (!list[a][b]) {
//     console.log("안돼")
//     return;
//   }
  
//   var 갈수있음 = list[a][b]; // 1
//   if (b + 갈수있음 === N-1 && a + 갈수있음 === N-1) { // 행감&열감 = list[2,2] 
//     // 정답
//     console.log("hing")
//   } else {
//     console.log([a],[b + 갈수있음], "===" ,[a + 갈수있음],[b], "가능함")
//     //list[a][b + 갈수있음];
//     try {
//       solution(a, b + 갈수있음); // solution(0, 1)
//     } catch (e) {
//     }
//     try {
//       solution(b+갈수있음, a); // solution(0, 1)
//     } catch (e) {
//     }
//   }
// }

// solution(a, b);