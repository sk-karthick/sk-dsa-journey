// Group Anagrams

// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Input: strs = ["act","pots","tops","cat","stop","hat"]
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
// Input: strs = ["x"]
// Output: [["x"]]

const strs = ["act", "pots", "tops", "cat", "stop", "hat"]
// const strs = ["x"]

function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string, string[]>();
    const base = 'a'.charCodeAt(0);

    for (const str of strs) {
        const count = new Array(26).fill(0);

        for (const char of str) {
            count[char.charCodeAt(0) - base]++;
        }

        const key = count.join('-');

        if (!map.has(key)) {
            map.set(key, []);
        }

        map.get(key)!.push(str);
    }

    return Array.from(map.values());
}

const findGroupAnagram = groupAnagrams(strs)
console.log(findGroupAnagram);
