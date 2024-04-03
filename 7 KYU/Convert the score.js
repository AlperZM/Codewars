function scoreboard(string) {
  let obj = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  }
  let str = string.split(" ").reverse().slice(0,2).reverse();
  return str.map(m=>obj[m])
}
