function countVowlsRanges(words: string[], queries: number[][]) {

    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
    const isVowelWord = (word: string): boolean => {
        return vowels.has(word[0]) && vowels.has(word[word.length - 1]);
    };

    const prefix = new Array(words.length + 1).fill(0);

    for (let i = 0; i < words.length; i++) {
        prefix[i + 1] = prefix[i] + (isVowelWord(words[i]) ? 1 : 0);
    }

    const result: number[] = [];
    for (const [start, end] of queries) {
        result.push(prefix[end + 1] - prefix[start]);
    }

    return result;
}

let words = ["aba", "bcb", "ece", "aa", "e"]
let queries = [[0, 2], [1, 4], [1, 1]]

console.log(countVowlsRanges(words, queries));
