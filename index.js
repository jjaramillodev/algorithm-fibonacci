// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// n = 0 -> 0
// n = 1 -> 1
// n = 2 -> 1

// const fibonacci = (n) => {
//   if (n < 2) return n
//   return fibonacci(n - 1) + fibonacci(n - 2)
// }

const fibonacci = (n) => {
  // crear un array donde guardar los valores
  const fib = [0, 1]
  // iterar desde 2 hasta n
  for (let i = 2; i <= n; i++) {
    // sumar los dos ultimos valores del array
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  return fib[n]
}

console.log(fibonacci(12)) // 144