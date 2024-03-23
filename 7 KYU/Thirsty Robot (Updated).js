function thirstyRobot(arr) {
  const liquor = arr.some(x => x > 15);
  const firstWine = arr.findIndex(x => x > 8 && x <= 15);
  const lastBeer = arr.findLastIndex(x => x <= 8);
  const wineBeforeBeer = firstWine >= 0 && firstWine < lastBeer;
  return liquor ? (wineBeforeBeer ? 'Poor robot' : 'Wonky robot') : wineBeforeBeer ? 'Oh dear' : 'Fine';
}
