// Group Anagrams
// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:

// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Example 2:

// Input: strs = ["x"]

// Output: [["x"]]
// Example 3:

// Input: strs = [""]

// Output: [[""]]


function groupAnagram(arr) {
    const map = new Map();
    for (let str of arr) {
        let charCount = new Array(26).fill(0);
        for (let char of str) {
            charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        let key = charCount.join('-')
        if (!map.has(key)) {
            map.set(key, [])
        }
        map.get(key).push(str)
    }
    // map.forEach((values)=> console.log(values))

    return [...map.values()]
}

console.log(groupAnagram(["act", "pots", "tops", "cat", "stop", "hat"]));



