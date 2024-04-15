function cantBeatSoJoin(numbers) {
  return [].concat(
    ...numbers.sort(
      (a, b) => b.reduce((a, b) => a + b, 0) - a.reduce((a, b) => a + b, 0)
    )
  );
}
