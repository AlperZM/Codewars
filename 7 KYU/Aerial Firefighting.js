 function waterbombs(fire, w) {
return fire.split("Y").reduce((a, b) => a + Math.ceil(b.length / w), 0)
 }
