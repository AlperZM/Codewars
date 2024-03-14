function replaceNth(text, n, oldValue, newValue, i = 0) {
  return n < 1 ? text :
    text.replace(new RegExp(oldValue, `g`), val => ++i % n ? val : newValue);
}
