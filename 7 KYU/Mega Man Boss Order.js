function getBossOrder(bosses) {
  var s = [bosses.find(b => b.difficulty === 1)];
  while (s.length < 8)
    s.push(bosses.find(b => b.weakness === s[s.length - 1].weapon));
  return s.map(b => b.name);
}
