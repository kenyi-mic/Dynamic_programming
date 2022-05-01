const canConstruct = (target, wordBank) => {
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const surffix = target.slice(word.length);
      if (canConstruct(surffix, wordBank) === true) {
        return true;
      }
    }
  }
  return false;
};
