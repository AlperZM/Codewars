function robot(skinScan) {
return skinScan.map(m=>m.map(e=>e.replace(/X/g,"*")))
}
