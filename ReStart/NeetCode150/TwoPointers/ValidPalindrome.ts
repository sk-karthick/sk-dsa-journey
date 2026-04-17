// Valid Palindrome


// // const str = "A man, a plan, a canal: Panama"
// const str = "race a car"

// function validPalindrome(str: string): boolean {
//     const alphanumericRegex = /^[a-zA-Z0-9]+$/;
//     let result = ""
//     for (let i = 0; i < str.length; i++) {
//         if(alphanumericRegex.test(str[i])) result = result+str[i].toLowerCase()
//     }

//     return result == result.split("").reverse().join("");
// }

// const findValidPalindrome = validPalindrome(str)
// console.log(findValidPalindrome);



// O(n) -> we use for loop


//We need to achieve O(n)


// const str = "A man, a plan, a canal: Panama"
const str = "race a car"

function validPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphaNum(s[left])) {
            left++;
        }

        while (left < right && !isAlphaNum(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

function isAlphaNum(c: string): boolean {
    return (
        (c >= 'a' && c <= 'z') ||
        (c >= 'A' && c <= 'Z') ||
        (c >= '0' && c <= '9')
    );
}

const findValidPalindrome = validPalindrome(str)
console.log(findValidPalindrome);
