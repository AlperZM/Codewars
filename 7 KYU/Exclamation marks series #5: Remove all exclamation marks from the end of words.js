function remove(s) {
  return s.split(" ").map(m=>m.replace(/!+$/gi,"")).join(" ")
}
