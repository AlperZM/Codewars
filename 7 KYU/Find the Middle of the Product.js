function findMiddle(str){
  if (typeof str !== 'string' || !/\d/.test(str)){return -1}; 
  str = Array.from(str.replace(/\D/g, '')).reduce((a,b) => a*b).toString();
  return +str.slice(Math.ceil(str.length / 2 - 1), Math.floor(str.length / 2 + 1));
}
