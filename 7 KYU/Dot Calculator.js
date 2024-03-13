function dotCalculator(equation) {
  let [a, o, b] = equation.split(" ");
  let res = 0;
  switch (o) {
    case "+":
      res = a.length + b.length;
      break;
    case "-":
      res = a.length - b.length;
      break;
    case "*":
      res = a.length * b.length;
      break;
    case "//":
      res = a.length / b.length;
      break;
  }

  return ".".repeat(res)
}
