function loopArr(arr, direction, steps) {
  if (direction === 'left'){
    return arr.slice(steps).concat(arr.slice(0,steps))
  }
  return arr.slice(-steps).concat(arr.slice(0,-steps))
}
