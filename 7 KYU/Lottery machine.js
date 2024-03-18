function lottery(str) {
  str = str.replace(/[^0-9]/g, "");
  return str.length === 0 ? "One more run!" : [...new Set(str)].join("");
}
