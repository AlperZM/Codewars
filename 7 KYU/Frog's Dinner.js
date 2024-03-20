function frogContest(n) {
    let chris = n * (n + 1) / 2;
    let tom = Math.floor(chris / 2) * (Math.floor(chris / 2) + 1) / 2;
    let sum = chris + tom;

    return `Chris ate ${chris} flies, Tom ate ${tom} flies and Cat ate ${sum * (sum + 1) / 2} flies`;
};
