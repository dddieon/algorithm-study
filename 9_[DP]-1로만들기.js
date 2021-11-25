// # 완료
// 문제원본: https://www.acmicpc.net/problem/1463

var number = 10;

var r = Array.from({length : number}, () => 0); 

function cutRod(number) {
  for (var n = 2; n <= number; n++) {
    r[n] = r[n-1] + 1; // 기본값: 점화식 이용

    if (n % 2 === 0) { // 2로 나눠질 때
      r[n] = Math.min(r[n], r[n/2] + 1);
    }

    if (n % 3 === 0) { // 3로 나눠질 때
      r[n] = Math.min(r[n], r[n/3] + 1);
    }
  }
}

cutRod(number);

console.log(r[number]);