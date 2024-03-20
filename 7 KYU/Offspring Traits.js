const bearFur = (bears) => {
switch(bears.toString()){
case 'black,black': return 'black';
case 'brown,brown': return 'brown';
case 'white,white': return 'white';
case 'black,brown': case 'brown,black': return 'dark brown';
case 'black,white': case 'white,black': return 'grey';
case 'brown,white': case 'white,brown': return 'light brown';
default: return 'unknown';
}
};
