const lengthOfSequence = (arr, n) => 
  arr.filter(v => v === n).length == 2 
    ? arr.lastIndexOf(n) - arr.indexOf(n) + 1 
    : 0;
