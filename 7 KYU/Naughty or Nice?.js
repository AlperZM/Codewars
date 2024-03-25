function getNiceNames(people){
 return people.filter(f=>f.wasNice).map(m=>m.name)
}

function getNaughtyNames(people){
 return people.filter(f=>!f.wasNice).map(m=>m.name)
}
