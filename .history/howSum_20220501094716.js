const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      return (memo[targetSum] = [...remainderResult, num]);
    }
  }
  return null;
};

console.log(howSum(7, [2, 3, 5]));
console.log(howSum(5000, [3, 9, 12]));
