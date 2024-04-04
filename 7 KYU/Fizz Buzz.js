function fizzbuzz(n) {
  return Array.from({
    length: n
  }, (e, i) => i + 1).map(m => m % 15 === 0 ? "FizzBuzz" : m % 5 === 0 ? "Buzz" : m % 3 === 0 ? "Fizz" : m)
}
