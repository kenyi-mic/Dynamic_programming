const canConstruct = (target, wordBank) => {
  if (target === "") {
    return true;
  }

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

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
console.log(
  canConstruct("skatebord", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); //false
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeeeee",
  ])
);
