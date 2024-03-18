function arrayMash (array1, array2) {
return array1.map((m,i)=>[m,array2[i]]).flat()
}
