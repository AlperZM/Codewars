function noonerize(numbers) {
  if(!Array.isArray(numbers)||!numbers.every(e => typeof e === "number")) return "invalid array";
  numbers = numbers.map(String)
  let a = numbers[1][0];
  let b = numbers[0][0]
  numbers[0] = a + numbers[0].slice(1);
  numbers[1] = b + numbers[1].slice(1);
  return Math.abs(numbers.reduce((a, b) => a - b))
}
