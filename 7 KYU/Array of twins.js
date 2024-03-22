function twins(myArray) {
  return myArray.every(e => myArray.filter(f => f == e).length === 2);
}
