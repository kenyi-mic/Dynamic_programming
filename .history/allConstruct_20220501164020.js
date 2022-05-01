const allConstruct = (target, wordBank) => {
  if (target === "") return [[]];

  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const surffix = target.slice(word.length);
      const surffixWays = allConstruct(surffix, wordBank);
      const targetWays = surffixWays.map((way) => [word, ...way]);
      result += targetWays;
    }
  }

  return result;
};

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));

console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);

console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
);

console.log(
  allConstruct("aaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaaaaaa",
    "aaaaaaaaa",
  ])
);
