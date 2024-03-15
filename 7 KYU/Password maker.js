function makePassword(phrase) {
return phrase.split(" ").map(m=>m[0]).join("").replace(/(o)/gi, 0)
    .replace(/(s)/gi, 5)
    .replace(/(i)/gi, 1);
}
