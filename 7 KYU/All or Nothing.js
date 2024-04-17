function possiblyPerfect(key,answers) {
  return key.every((k, i) => k === '_' || k === answers[i]) || key.every((k, i) => k !== answers[i]);
}
