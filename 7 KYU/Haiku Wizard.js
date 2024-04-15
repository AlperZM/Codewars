function haikuWizard(arr) {
  return arr
    .map(a => a.map(val => words[parseInt(val / 10) - 1][val % 10]).join(" "))
    .join("\n");
}
