function dadFilter(str){
return str.trim().replace(/,+/g, ",").replace(/,*$/g, "")
}
