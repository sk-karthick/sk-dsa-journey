// Valid Anagram
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.


const s = "aab", t = "abb"

function checkAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const map = new Map<string, number>();

    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    for (const char of t) {
        if (!map.has(char)) return false;

        map.set(char, map.get(char)! - 1);

        if (map.get(char) === 0) {
            map.delete(char);
        }
    }

    return map.size === 0;
}

const isAnagram = checkAnagram(s, t)
console.log(isAnagram);
