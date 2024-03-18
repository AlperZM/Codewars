function alan(x) {
  let base = [
    "Rejection",
    "Disappointment",
    "Backstabbing Central",
    "Shattered Dreams Parkway"
  ];
  return base.every(v => x.includes(v)) ?
    "Smell my cheese you mother!" :
    "No, seriously, run. You will miss it.";
}
