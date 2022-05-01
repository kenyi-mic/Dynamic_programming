const allConstruct = (target, wordBank) => {};

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
