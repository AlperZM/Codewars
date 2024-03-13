function conjugate(verb){
  const dic = { 'ar':['o','as','a','amos', 'áis','an'],
                'er':['o','es','e','emos', 'éis','en'],
                'ir':['o','es','e','imos', 'ís', 'en']};

  return { [verb]: dic[verb.slice(-2)].map(e=> verb.slice(0,-2)+e) };
}
