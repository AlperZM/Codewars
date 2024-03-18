function countSalutes(hallway) {
  let meet = 0;
  for(let i = 0; i < hallway.length; i++){
    if(hallway[i] === ">"){
      for(let j = i+1; j < hallway.length; j++){
        if(hallway[j] === "<"){meet++}
      }
    }
  }
  return meet * 2
}
