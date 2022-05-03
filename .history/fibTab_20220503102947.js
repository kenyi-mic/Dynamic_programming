const fib = (n) => {
  const table = Array(n + 1).fill(0);
  table[1] = 1; //
  console.log(table);
};

console.log(fib(20));
