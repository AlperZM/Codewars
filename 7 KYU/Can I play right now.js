function canIPlay(now,start,end) {
return start > end ? now >= start || now < end : 
start < end ? now >= start && now < end : now == start
}
