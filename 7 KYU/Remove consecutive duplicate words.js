function removeConsecutiveDuplicates(string) {
  return string.split(" ").map((m, i, arr) => m === arr[i + 1] ? m = "" : m)
  .join(" ").replace(/\s+/g, " ").trim();
}
