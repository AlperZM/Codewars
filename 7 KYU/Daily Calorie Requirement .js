function calorie([name, g, age, height, weight, activity]) {
  let RMR = 0;
  if (g === "f") RMR = 10 * weight + 6.25 * height - 5 * age - 161;
  else RMR = 10 * weight + 6.25 * height - 5 * age + 5;
  let active = 0;
  if (activity === "little activity") active = 1.2;
  if (activity === "moderately active") active = 1.55;
  if (activity === "very active") active = 1.7;
  if (activity === "extremely active") active = 1.9;
  return `${name}´s daily calorie requirement is ${(
    Math.round(RMR * active * 100) / 100
  ).toFixed(2)} kcal.`;
}
