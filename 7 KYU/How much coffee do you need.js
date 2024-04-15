function howMuchCoffee(events) {
  let res = events.map(m => (/(^cw$)|(^cat$)|(^dog$)|(^movie$)/).test(m) ? 1 :
    (/(^CW$)|(^CAT$)|(^DOG$)|(^MOVIE$)/).test(m) ? 2 : 0).reduce((a, b) => a + b, 0)
  return res > 3 ? 'You need extra sleep' : res
}
