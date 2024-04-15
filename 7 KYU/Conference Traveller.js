function conferencePicker(citiesVisited, citiesOffered) {
  return citiesOffered.filter(f => !citiesVisited.includes(f))[0] || 'No worthwhile conferences this year!'
}
