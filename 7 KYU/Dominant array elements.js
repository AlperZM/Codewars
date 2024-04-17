const solve = (arr) =>
  arr.filter((e, i) => arr.slice(i + 1).every((x) => x < e));
