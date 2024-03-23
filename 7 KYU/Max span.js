const maxSpan = (array) => {
  return Math.max(...Array.from(new Set(array)).map(x => array.lastIndexOf(x) - array.indexOf(x))) + 1;
}
