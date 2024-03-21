function parkingCost(timeIn, timeOut) {
  let tIn = timeIn.split(":"),
    tOut = timeOut.split(":");
  let time = new Date(
    new Date(0, 0, 0, tOut[0], tOut[1]) - new Date(0, 0, 0, tIn[0], tIn[1])
  );
  time = time.getHours() * 60 + time.getMinutes();
  return time <= 30 ? 0 : time <= 120 ?
    Math.ceil((time - 30) / 10) :
    9 + Math.ceil((time - 120) / 10) * 2;
}
