function gaslighting(shirtWord, yourWord, friendsLetters) {
  return [...shirtWord].some((s, i) => yourWord[i] !== s && (friendsLetters.includes(s) || friendsLetters.includes(yourWord[i])))
}
