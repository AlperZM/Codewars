function teamComp(heroes) {
  if (heroes.length != 6 || new Set(heroes).size != heroes.length) throw "GG";
  return [TANK, DAMAGE, SUPPORT].map(
    arr => arr.filter(h => heroes.indexOf(h) >= 0).length
  );
}
