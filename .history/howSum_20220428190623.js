const howSum = (targetSum, numbers) => {
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const reminder = targetSum - num;
    const reminderResult = howSum(reminder, numbers);
    if (reminderResult !== null) {
      return [...reminderResult, num];
    }
  }
};

console.log(howSum(7, [2, 3]));
