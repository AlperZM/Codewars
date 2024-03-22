function gameOfFives(bavarianBeerBears, scandinavianSchöllers) {
  return bavarianBeerBears.filter(f => f === 5).length === scandinavianSchöllers.filter(f => f === 5).length ?
    "Drinks All Round! Free Beers on Bjorg!" :
    "Uh Oh! Bjorg's a donut! No beer for anyone!"
}
