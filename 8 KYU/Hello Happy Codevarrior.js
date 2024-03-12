function Warrior(n){
 let name = n;  
  this.name = n=>n ? name = n : name;
}
  
Warrior.prototype.toString = function(){
    return `Hi! my name's ${this.name()}`;
}
