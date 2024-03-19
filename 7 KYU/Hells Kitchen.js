function gordon(a) {
  return a.split(" ").map(m => [...m]
    .map(e => (/[eiou]/gi).test(e) ? "*" : (/a/gi).test(e) ? "@" : e.toUpperCase()).join("") + "!!!!").join(" ")
}
