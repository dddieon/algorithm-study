// 문제: https://www.acmicpc.net/problem/18222

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "16.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const index = (Number(input[0]));

let arr = [0];
let save;

function thueMorse(arr) {
  result = [...arr, ...arr.map(i => i === 1 ? 0 : 1)];
  if (result.length > index) {
    save = result[index - 1];
    return;
  } else {
    thueMorse(result);
  }
}

thueMorse(arr);

console.log(save);