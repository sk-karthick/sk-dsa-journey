const strToInteger = (s: string): number => {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    let i = 0;
    const n = s.length;
    let result = 0;
    let sign = 1;

    while (i < n && s[i] === ' ') i++;

    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    while (i < n && s[i] >= '0' && s[i] <= '9') {
        const digit = s.charCodeAt(i) - '0'.charCodeAt(0);

        if (result > Math.floor(INT_MAX / 10) ||
            (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
}

console.log(strToInteger("42"));
