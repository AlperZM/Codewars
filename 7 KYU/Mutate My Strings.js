function mutateMyStrings(stringOne, stringTwo) {
  let res = [stringOne];
  stringOne = [...stringOne];
  stringTwo = [...stringTwo];

  for (let i = 0; i < stringOne.length; i++) {
    if (stringOne[i] !== stringTwo[i]) {
      stringOne[i] = stringTwo[i];
      res.push(stringOne.join(""))
    }
  }

  return res.join("\n") + "\n"

}
