function fibonacci(n) {
	const memory = []; 

	function fib(n) {
		if (n <= 1) { // 예외생성: n == 0, 1 일 때는 memory[n-1]이나 memory[n-2] 가 없으므로 a를 통한 메모리제이션이 불가능하다. 특별 취급
      memory[n] = 1;
			return 1;
		}

    if (memory[n]) { // 있으면 가져와
      return memory[n];
    }

		memory[n] = fib(n-1) + fib(n-2) // 없으면 메모리제이션 
    return memory[n];
	}

  return fib(n)
}

console.log(fibonacci(5))