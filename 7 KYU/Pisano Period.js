function pisano(n) {
    let a = 0;
    let b = 1;
    let period = 0;

    do {
        let temp = a;
        a = b;
        b = (temp + b) % n;
        period++;
    } while (!(a === 0 && b === 1));

    return period;
}
