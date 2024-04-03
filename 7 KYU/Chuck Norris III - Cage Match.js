function headSmash(array) {
  if (array.length === 0) return "Gym is empty";
  if (Array.isArray(array)) return array.map(v => v.replace(/O/g, " "));
  return "This isn't the gym!!";
}
