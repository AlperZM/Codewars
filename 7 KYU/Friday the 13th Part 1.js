function killcount(counselors, jason){
  return counselors.filter(f=>f[1]<jason).map(m=>m[0])
}
