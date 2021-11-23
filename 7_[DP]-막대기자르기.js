var p = [0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30]; // 가격표

function cutRod(p, n) {
  var r = [0];
  for (var j = 1; j <= n; j++) {
    q = -1; // q: 최대값을 저장하는 변수. 초기상태에서 q는 -1이다.
    for (var i = 1; i <= j; i++) {
      q = Math.max(q, p[i] + r[j - i]); // 최대값q와 R0을 비교 => R1이 생기고 ||| 최대값 q와 R1를 비교 => R2이 생기고 ... ||| 최대값 q와 R2를 비교 => R3이 생기고
      console.log(q, "q")
    }
    r[j] = q; // 결과: R1, R2를 통해 R3이 생긴다
  }
  return r[n];
}

cutRod(p, 3); // 가격표를 보고, 길이 3의 막대를 가장 비싸게 팔아라