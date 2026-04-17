// function validPalindrome(s: string): boolean {

//     let left = 0;
//     let right = s.length - 1;

//     while (left < right) {

//         if (s[left] !== s[right]) {
//             return isPalindrome(s, left + 1, right) ||
//                    isPalindrome(s, left, right - 1);
//         }

//         left++;
//         right--;
//     }

//     return true;
// }

// function isPalindrome(s: string, left: number, right: number): boolean {

//     while (left < right) {
//         if (s[left] !== s[right]) return false;

//         left++;
//         right--;
//     }

//     return true;
// }

// console.log(validPalindrome("abca"));

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7]


function findMostWater(height: Array<number>) {
    let left = 1, right = height.length - 1
    let result = 0

    while (left <= right) {
        let area = Math.min(height[left], height[right]) * (right - left)
        result = result + area
        left++
        right--;
    }

    return result
}


console.log(findMostWater(height));
