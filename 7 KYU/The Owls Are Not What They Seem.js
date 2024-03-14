function owlPic(text){
  let wing = text.toUpperCase().match(/[8WTYUIOAHXVM]/g)
  return wing.join('') + "''0v0''" + wing.reverse().join('')
}
