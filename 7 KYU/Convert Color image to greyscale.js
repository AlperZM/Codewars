function color2grey(image) {
return image.map(m =>
    m.map(n => n.map(k => Math.round(n.reduce((a,b) => a + b, 0) / 3)))
  );
}
