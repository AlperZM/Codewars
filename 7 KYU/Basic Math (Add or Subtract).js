function calculate(str) {
return str.split('plus').join(' ').split('minus').join(' -').split(' ').reduce((a,i)=> a + (+i), 0).toString()
}
