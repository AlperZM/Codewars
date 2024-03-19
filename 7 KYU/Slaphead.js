function bald(x) {
  let hairs = x.replace(/-/g, "").length;
  let desc = hairs === 0 ? "Clean!" : hairs === 1 ? "Unicorn!" : hairs === 2 ? "Homer!" : hairs > 2 && hairs < 6 ? "Careless!" : "Hobo!"

  return ["-".repeat(x.length), desc]
}
