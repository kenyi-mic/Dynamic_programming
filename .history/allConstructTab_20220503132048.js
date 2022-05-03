const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => []);
  table[0][0] = [[]];

  for (let i = 1; i <= target.length; i++) {
    for (let word of wordBank) {
      if (target.slice(i, i + target.length) === word) {
        const newCombinations = table[i].map((subArray) => [...subArray, word]);
        table[i + word.length].push(...newCombinations);
      }
    }
  }
  return table[target.length];
};
