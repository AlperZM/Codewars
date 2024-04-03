function pluck(objs, name) {
  return objs.map(m => m[name] || undefined)
}
