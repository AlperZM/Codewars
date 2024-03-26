function findDeletedNumber(arr, mixArr) {
return arr.filter((f)=>!mixArr.includes(f))[0] || 0
}
