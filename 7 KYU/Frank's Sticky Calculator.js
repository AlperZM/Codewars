function stickyCalc (operation, val1, val2){
  val1 = +(Math.round(val1).toString() + val2);
  
  switch(operation){
      case '+':
        return Math.round(val1 + val2);
      case '-':
        return Math.round(val1 - val2);
      case '*':
        return Math.round(val1 * val2);
      default:
        return Math.round(val1 / val2);
  }
}
