
function groupAnagram(strs) {
    let anagramGroups = new Map();
    for (let str of strs) {
        console.log(str);
        let charCount = new Array(26).fill(0)

        for (let char of str) {
            console.log('Character and Occurance ' , char ,char.charCodeAt(0) - 'a'.charCodeAt(0));
            charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        let key = charCount.join('-')
        console.log(key);
        if (!anagramGroups.has(key)) {
            anagramGroups.set(key, [])
        }
        anagramGroups.get(key).push(str);
    }
    anagramGroups.forEach((key,values) => {
        return
    });
    
    // console.log(anagramGroups);
    return [...anagramGroups.values()]
}

console.log(groupAnagram(['eat', 'ate', 'tea', 'nat', 'tan', 'bat']));