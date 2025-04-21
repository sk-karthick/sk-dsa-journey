function clearDigits(str: string): string {
    // let stack = []
    // for (let i = 0; i < str.length; i++) {
    //     if (!isNaN(Number(str[i]))) {
    //         stack.pop()
    //         continue;
    //     } else {
    //         stack.push(str[i])
    //     }
    // }
    // return stack.join('')

    let regex = new RegExp(/[a-zA-Z]\d/g)
    if (!regex.test(str)) return str
    return clearDigits(str.replace(regex, ''))
}

console.log(clearDigits("cb"));
