function scrollingText(text) {
  text = text.toUpperCase();
  return [...text].map((m, i) => text.slice(i) + text.slice(0, i));
}
