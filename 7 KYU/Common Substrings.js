function SubstringTest(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  for (var i = 0; i < str2.length - 1; i++) {
    if (str1.indexOf(str2.substr(i, 2)) > -1)
      return true;
  }
  return false;
}
