function minimumSteps(numbers, value) {
  let i = 0;
  numbers = numbers.sort((a, b) => a - b)
  while (value > 0) {
    value -= numbers[0];
    numbers = numbers.slice(1);
    i++
  }
  return i - 1
}
