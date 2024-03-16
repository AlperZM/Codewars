var mispelled = function(word1, word2)
{
  if(Math.abs(word1.length - word2.length) > 1) return false
  if(~word1.indexOf(word2) || ~word2.indexOf(word1)) return true
  return word1.split('').filter((e,i)=>e!=word2[i]).length==1
}
