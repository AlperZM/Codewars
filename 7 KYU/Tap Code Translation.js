function tapCodeTranslation(text) {
  
  const map = 'abcdefghijlmnopqrstuvwxyz';
  const row = c => '.'.repeat(Math.floor(map.indexOf(c) / 5) + 1);
  const col = c => '.'.repeat(map.indexOf(c) % 5 + 1);
  
  return text
    .replace(/k/g, 'c')
    .replace(/[a-z]/g, c => `${row(c)} ${col(c)} `)
    .trim();
  
}
