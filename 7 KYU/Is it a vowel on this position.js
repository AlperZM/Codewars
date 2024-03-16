function checkVowel(string, position) {
return string[position] ? (/[aeiou]/i).test(string[position]) : false
};
