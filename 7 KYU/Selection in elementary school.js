function schoolSelection(array) {
  let obj = {
    'Kindergarten': 0,
    '1st grade': 0,
    '2nd grade': 0,
    '3rd grade': 0,
    '4th grade': 0,
  }
  array.map(m => m === 5 ? obj["Kindergarten"] += 1 :
  m === 6 ? obj["1st grade"] += 1 :
  m === 7 ? obj["2nd grade"] += 1 :
  m === 8 ? obj["3rd grade"] += 1 :
  m === 9 ? obj["4th grade"] += 1 :
  m)
  return obj
}
