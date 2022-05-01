const bestSum = (targetSum, numbers) => {
  let shortestResult = null;
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderResult = bestSum(remainder, numbers);
    if (remainderResult !== null) {
      let result = [...remainderResult, num];
      if (shortestResult === null || result.length < shortestResult.length) {
        result = shortestResult;
      }
    }
  }
  return shortestResult;
};

console.log(bestSum(7, [2, 7]));
console.log(bestSum(8, [2, 3, 6, 4]));
console.log(bestSum(1013, [2, 4, 5, 6]));
