function leaderB(user, user_score, your_score) {
  let diff = user_score - your_score;
  let beta = Math.floor(diff / 3);
  let num = diff % 3;

  return diff < 0 ? "Winning!" : diff === 0 ? "Only need one!" :
    (beta + num) > 1000 ? `To beat ${user}'s score, I must complete ${beta} Beta kata and ${num} 8kyu kata. Dammit!` :
    `To beat ${user}'s score, I must complete ${beta} Beta kata and ${num} 8kyu kata.`
}
