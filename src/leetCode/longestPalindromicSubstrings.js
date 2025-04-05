import chalk from "chalk";

function longestPalindomicSubstring(str) {
    if (str.length <= 1) return "String contains minimum letters."

    let n = str.length;
    let start = 0;
    let maxLength = 1;

    let dp = Array.from({ length: n }, () => Array(n).fill(false));

    for (let i = 0; i < n; i++) dp[i][i] = true;
    console.log(dp);
    
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i < n - len + 1; i++) {
            let j = i + len - 1
            if (str[i] === str[j] && (len === 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true
                if (len > maxLength) {
                    start = i;
                    maxLength = len
                }
            }
        }
    }
    return ` ${str.substring(start, start + maxLength)} `;
}

const LongestPalindomicSubstring = longestPalindomicSubstring("cbbd")

console.log(chalk.bgGreen(LongestPalindomicSubstring));
