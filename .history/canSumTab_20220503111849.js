const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;
};

console.log(canSum(6, [2, 4, 4, 8]));
console.log(canSum(7, [2, 4]));
