

function lengthOfLongestSubstring(str) {
    const charSet = new Set();
    let left = 0, maxLength = 0;
    for (let right = 0; right < str.length; right++) {
        while (charSet.has(str[right])) {
            charSet.delete(str[left])
            left++
        }
        charSet.add(str[right])
        maxLength = Math.max(maxLength, right - left + 1)
    }
    return maxLength
}
console.log(lengthOfLongestSubstring("abcabcaabbc"));



// // Explanation
// str = (a, b, c, a, b, c, a, a, b, b, c)
// ind = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// charSet = new Set()
// left = 0;
// maxLength = 0;
// right = 0;
// charSet.has(str(0)) --> false
// so add ==> charSet(str(0)) -> a
// maxLength => 1

// // 2nd Iteration
// right = 1;
// charSet.has(str[right](b)) --> false
// charSet.add => (a,b)
// maxLength = (1,1-0+1) ==> 2

// // 3rd Iteration
// right = 2 

// charSet.has(str[2](c)) --> false
// charSet.add(str(right)) => (a,b,c)
// maxLength = (2,2-0+1) => 3

// 4th Iteration
// right = 3 
// charSet.has(str[right]) --> true
//     charSet.delete(str[left]) --> so its delete a 0th index (a) --> (b,c)
//     left becomes 1
// charSet.add(str[right]) (b,c,a)
// maxLength => (3,3-1+1) => 3 

// 5th Iteration
// right = 4
// left =1;
// charSet.has(str[right])--> true
//     charSet.delete(str[left]) --> (c,a)
//     left++ --> left 2
// charSet.add(str[right]) --> (c,a,b)
// maxLength = (3, 4-2+1) => (3,3) --> 3