function nicknameGenerator(name) {
  return name.length < 4 ? "Error: Name too short" :
    (/[aeiou]/gi).test(name[2]) ? name.slice(0, 4) : name.slice(0, 3)
}
