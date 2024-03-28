function diamondBurglar(locker) {
  let res = 0;
  locker = locker.map(m => m.split(".").filter(f => f != "")).flat()
    .map(m => m.length <= 2 ? res += 1 : m.length % 2 === 0 ? res += m.length / 2 : res += Math.ceil(m.length / 2))
  return res
}
