

const numberOfPowerfulInt = (start: number, finish: number, limit: number, s: string): number => {
    const start_ = (start - 1).toString();
    const finish_ = finish.toString();
    return calculate(finish_, s, limit) - calculate(start_, s, limit);
};

function calculate(x: string, s: string, limit: number): number {
    if (x.length < s.length) {
        return 0;
    }
    if (x.length === s.length) {
        return x >= s ? 1 : 0;
    }

    const suffix = x.slice(-s.length);
    let count = 0;
    const preLen = x.length - s.length;

    for (let i = 0; i < preLen; i++) {
        const digit = parseInt(x[i]);
        if (limit < digit) {
            count += Math.pow(limit + 1, preLen - i);
            return count;
        }
        count += digit * Math.pow(limit + 1, preLen - 1 - i);
    }
    if (suffix >= s) {
        count++;
    }
    return count;
}


console.log(numberOfPowerfulInt(1, 6000, 4, '124'));
