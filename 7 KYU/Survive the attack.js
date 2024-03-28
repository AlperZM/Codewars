function hasSurvived(attackers, defenders) {
  let attack = 0,
    defend = 0;
  let attackPower = attackers.reduce((a, b) => a + b, 0),
    defendPower = defenders.reduce((a, b) => a + b, 0);
  let i = 0;
  while (attackers[i] || defenders[i]) {
    if (!attackers[i] || attackers[i] < defenders[i]) {
      defend++
    } else
    if (!defenders[i] || attackers[i] > defenders[i]) {
      attack++
    }
    i++
  }
  return defend === attack ? attackPower <= defendPower : defend > attack
}
