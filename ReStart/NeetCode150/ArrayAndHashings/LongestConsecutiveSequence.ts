// Longest Consecutive Sequence

const numss = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]


function longestConsecutive(numss: number[]): number {
    const set = new Set(numss);
    let longest = 0;

    for (const num of set) {
        if (!set.has(num - 1)) {
            let current = num;
            let length = 1;

            while (set.has(current + 1)) {
                current++;
                length++;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
}

const findLongestConsecutiveSequence = longestConsecutive(numss)
console.log(findLongestConsecutiveSequence);


// 0
// 0-1 = -1
//  c = -1
//  l = 1
//  0 + 1 = true current = 1, length = 2 ,
