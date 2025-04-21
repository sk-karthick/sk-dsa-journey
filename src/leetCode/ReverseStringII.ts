const reverseStr = (s: string, k: number): string => {

    let result = ''
    for (let i = 0; i < s.length; i += 2 * k) {
        let reverse = s.slice(i, i + k).split('').reverse().join('')
        let remaining = s.slice(i + k, i + (2 * k))
        result += reverse + remaining
    }

    return result
}
// console.log(reverseStr("abcdefg", 2));

