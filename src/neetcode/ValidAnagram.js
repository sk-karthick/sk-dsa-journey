// Valid Anagram
// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
// Example 1:

// Input: s = "racecar", t = "carrace"

// Output: true
// Example 2:

// Input: s = "jar", t = "jam"

// Output: false

// It takes O(n) time
function validAnagram(s, t) {
    if (s.length !== t.length) return false;

    const charCount = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        charCount[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++
        charCount[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--
    }
    return charCount.every((count) => (count === 0))
}

console.log(validAnagram('racecar', 'carrace'))

// Alternative approach
// O(n log n) Approach (Sorting Method - Simpler but Slower ❌)
const ValidAnagram = (s, t) => s.split('').sort().join('') === t.split('').sort().join('');

console.log(ValidAnagram('racecar', 'carrace'));