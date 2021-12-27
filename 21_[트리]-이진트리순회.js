// 이진트리
// ★ 문제: https://www.acmicpc.net/problem/1991


const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "21.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = input[0]

let list = [];
for (let i = 0; i < N; i++) {
  list[i] = input[i + 1].split(" ");
}

//1. 전위손회
// 작은단위 행동 (자식탐방): 왼쪽있으면 왼쪽가고, 오른쪽만 있으면 오른쪽 자식간다
// => 없으면 작은단위 행동을 멈추고 이전차수로 돌아간다 (스택에 쌓인 경로 기록대로 회귀)

function preOrder(root) {
    const PRE_ORDER_LIST = [];
    function goDown(startAlphabet) {
        const startArr = list.find(i => i[0] === startAlphabet);
        const now = startArr[0];
        PRE_ORDER_LIST.push(now);

        const childLeft = startArr[1] !== "." ? startArr[1] : null;
        const childRight = startArr[2] !== "." ? startArr[2] : null;
        if (childLeft) {
            goDown(childLeft);
        }
        if (childRight) {
            goDown(childRight);
        }
        return;
    }

    goDown(root)
    console.log(PRE_ORDER_LIST.join(""));
}


//2. 중위순회
// 작은단위 행동 (자식탐방): 왼쪽 있으면 왼쪽 간다
// => 없으면 작은단위 행동을 멈추고 부모 간 후, 오른쪽으로 내려간다
function inOrder(root) {
    const IN_ORDER_LIST = [];
    let ROOT = [root];
    let END = [];
    function goDown(startAlphabet) {
        const startArr = list.find(i => i[0] === startAlphabet);

        const now = startArr[0];
        const childLeft = (startArr[1] !== "." && !END.find(i =>  i === now)) ? startArr[1] : null;
        const childRight = startArr[2] !== "." ? startArr[2] : null;

        if (childLeft) {
            END.push(now);
            ROOT.push(now);
            goDown(childLeft);
        }

        if (IN_ORDER_LIST.indexOf(now) === -1) IN_ORDER_LIST.push(now);

        if (ROOT.length) {
            const preRoot = ROOT.pop();
            goDown(preRoot);
        }
        if (childRight) {
            goDown(childRight);
        }
        if (END.length === N) {
            return;
        }
        return;
    }

    goDown(root)
    console.log(IN_ORDER_LIST.join(""));
}

// 3. 후위순회
// 작은단위 행동 (자식탐방): 왼쪽 있으면 간다
// => 없으면 작은단위 행동을 멈추고 부모 간 후, 왼쪽으로 내려간다


preOrder("A")
inOrder("A")
// postOrder("A")

