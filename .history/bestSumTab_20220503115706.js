const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const combination = [...table[i], num];
        if (!table[i + num] || table[i + num].length > combination.length) {
          table[i + num] = combination;
        }
      }
    }
  }
  return table[targetSum];
};

console.log(howSum(7, [2, 4]));
console.log(howSum(7, [3, 4, 5, 7]));
console.log(howSum(8, [2, 4]));
console.log(howSum(200, [2, 45, 71, 50]));
