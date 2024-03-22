function bitSlice(image, plane) {
  return image.map(m => m.map(e => Number(e.toString(2).padStart(8, '0')[7 - plane])))
}
