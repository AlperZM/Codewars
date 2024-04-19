function chain(input, fs) {
   return fs.reduce(function (input, fnc) {
      return fnc(input);
   }, input);
}
