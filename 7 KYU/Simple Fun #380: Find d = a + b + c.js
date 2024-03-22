function findD(arr) {
  let a = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let z = j + 1; z < arr.length; z++) {
        if (
          arr.includes(arr[i] + arr[j] + arr[z]) &&
          Math.abs(arr[i]) !== Math.abs(arr[j]) &&
          Math.abs(arr[i]) !== Math.abs(arr[z]) &&
          Math.abs(arr[j]) !== Math.abs(arr[z])
        )
          a.push(arr[i] + arr[j] + arr[z]);
      }
    }
  }
  return a.length ? Math.max(...a) : null;
}
