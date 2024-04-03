function makeSequences(n){
  let arr = [1];
  for (let i = 1; i <= n; i++)
    arr.push(i % 2 ? arr[i - 1] : arr[i / 2] + arr[i - 1]);
  return arr.pop();
}
