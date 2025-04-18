function countAndSay(n: number): string {
    if (n === 1) return "1"

    let result = "1";

    for (let i = 2; i <= n; i++) {
        let temp = "";
        let count = 1;

        for (let j = 1; j <= result.length; j++) {
            if (result[j] === result[j - 1]) {
                count++
            } else {
                temp += count.toString() + result[j - 1]
                count = 1
            }
        }
        result = temp
    }
    return result
}

console.log(countAndSay(4));
