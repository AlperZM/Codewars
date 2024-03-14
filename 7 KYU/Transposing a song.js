function transpose(song, interval) {
  let sharp = "A,A#,B,C,C#,D,D#,E,F,F#,G,G#".split(",");
  let flat = "A,Bb,B,C,Db,D,Eb,E,F,Gb,G,Ab".split(",");
  return song.map(
    note =>
      sharp[
        (Math.max(flat.indexOf(note), sharp.indexOf(note)) + interval + 12) % 12
      ]
  );
}
