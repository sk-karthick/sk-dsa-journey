function NoofWays(words: string[], target: string): number {
    const MOD = 1e9 + 7;
    const m = words[0].length;
    const n = target.length;

    const freq = Array.from({ length: m }, () => new Array(26).fill(0));
    for (let word of words) {
        for (let i = 0; i < m; i++) {
            freq[i][word.charCodeAt(i) - 97]++;
        }
    }

    let dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (let col = 0; col < m; col++) {
        for (let i = n - 1; i >= 0; i--) {
            const charIndex = target.charCodeAt(i) - 97;
            const count = freq[col][charIndex];
            if (count > 0) {
                dp[i + 1] = (dp[i + 1] + dp[i] * count) % MOD;
            }
        }
    }

    return dp[n];
}

let words = ["acca", "bbbb", "caca"], target = "aba"
console.log(NoofWays(words, target));

