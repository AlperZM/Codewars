function catMouse(map, moves) {
  if ([...map].indexOf("m") === -1 || [...map].indexOf("C") === -1) {
    return "boring without two animals"
  }
  map = map.split("\n")
  let catX = map.map(m => m.indexOf("C")).filter(f => f > -1) * 1;
  let catY = map.map(m => m.includes("C")).indexOf(true) + 1;
  let mX = map.map(m => m.indexOf("m")).filter(f => f > -1) * 1;
  let mY = map.map(m => m.includes("m")).indexOf(true) + 1;
  return Math.abs(catX - mX) + Math.abs(catY - mY) <= moves ?
    "Caught!" :
    "Escaped!";
}
