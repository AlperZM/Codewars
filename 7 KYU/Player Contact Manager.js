function playerManager(players) {
return  players ? players.split(`, `)
  .reduce((pre, val, idx, arr) => idx % 2 ? pre : [...pre, {player: val, contact: +arr[idx + 1]}], []) : [];
}
