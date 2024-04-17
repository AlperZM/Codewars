function createBox(width, length) {
  let target = new Array(length).fill(0).map(() => new Array(width).fill(0));

  let startRow = 0, startCol = 0;
  let endRow = target.length - 1, endCol = target[0].length - 1;

  let value = 1;

  while (startRow <= endRow && startCol <= endCol) {
    for (let i = startCol; i <= endCol; i++) {
      target[startRow][i] = value;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      target[i][endCol] = value;
    }
    endCol--;

    if (startRow <= endRow) {
      for (let i = endCol; i >= startCol; i--) {
        target[endRow][i] = value;
      }
    }
    endRow--;

    if (startCol <= endCol) {
      for (let i = endRow; i >= startRow; i--) {
        target[i][startCol] = value;
      }
    }
    startCol++;
    value++;
  }

  return target;
}

