
const verfiPalindrome = (num: number) => {

    // return num === Number(num.toString().split('').reverse().join(''))

    if (num < 0) return false;
    let str = num.toString();
    let left = 0, right = str.length - 1

    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++
        right--
    }

    return true
}
console.log(verfiPalindrome(121));
