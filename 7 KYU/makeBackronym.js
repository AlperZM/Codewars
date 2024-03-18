var makeBackronym = function(string){
  return [...string.toUpperCase()].map(m=>dict[m]).join(" ");
};
