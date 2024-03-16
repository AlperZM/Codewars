function calculate(string) {
 let operand1 = string.replace(/\D/gi," ").split(" ").filter(f=>f!=="")[0]*1;
 let operand2 = string.replace(/\D/gi," ").split(" ").filter(f=>f!=="")[1]*1;
 let operator = string.includes("loses") ? "-" : string.includes("gains") ? "+" : "+";
 
 return operator === "-" ? operand1 - operand2: operator === "+" ? operand1 + operand2 : ""
}
