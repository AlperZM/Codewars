function* nextElementGenerator(array) {
  while (true) {
    yield* array;
  }
}
