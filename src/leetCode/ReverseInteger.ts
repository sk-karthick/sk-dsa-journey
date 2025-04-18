
function reverseInteger(x: number) {
    const isNegative = x < 0;
    let str = Math.abs(x).toString().split('').reverse().join('');
    let reversed = parseInt(str);

    return isNegative ? -reversed : reversed;
}

console.log(reverseInteger(-123));


