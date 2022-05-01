const countConstruct = (target, wordBank) => {
  if (target === "") return 1;
  let totalCount = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const numOfWays = countConstruct(target.slice(word.length), wordBank);
      totalCount += numOfWays;
    }
  }
};
