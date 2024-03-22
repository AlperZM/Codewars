function operate(pcSet, operation) {
  let digits = operation.replace(/[^0-9]/g, "") * 1;
  let arr = pcSet.map(m => (m + digits) % 12);
  if (operation.slice(-1) === "I") {
    return pcSet.map(m => (12 - m + digits) % 12).sort((a, b) => a - b);
  }
  return arr.sort((a, b) => a - b);
}
