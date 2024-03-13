var sing = function () {
  var song = [];
  
  for (var i = 99; i > 0; i--){  
    song.push(i + ' ' + (i !== 1 ? 'bottles' : 'bottle') +' of beer on the wall, ' + i +(i !== 1 ? ' bottles' : ' bottle') + ' of beer.');
    song.push('Take one down and pass it around, ' + (i == 2 ? '1 bottle' : i !== 1 ? (i - 1) + ' bottles' : 'no more bottles' ) + ' of beer on the wall.');
  }
  
  song.push('No more bottles of beer on the wall, no more bottles of beer.');
  song.push('Go to the store and buy some more, 99 bottles of beer on the wall.');
  
  return song;
};
