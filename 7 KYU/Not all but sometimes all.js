function remove(str, what) {
return [...str].map(m=>(what[m] > 0 ? what[m]-- && (m=""): m)).join("")
}
