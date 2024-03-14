function reverseMessage(str) {
return !str ? "":
str.split(" ").reverse().map(m=>[...m].reverse()[0].toUpperCase()+[...m].reverse().join("").slice(1).toLowerCase()).join(" ")
}
