"use strict";
// function leftHandTriangle(n: number) {
//     let arr = ''
//     for (let i = 1; i <= n; i++) {
//         arr = arr + i
//         console.log(arr);
//     }
//     console.log('Outer console ------', arr);
// }
// leftHandTriangle(10)
function triangle(n) {
    let arr = '';
    console.log('Mid Point', (n / 2));
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (Math.floor(n / 2) === j) {
                arr = arr + '*';
            }
            else {
                arr = arr + ' ';
            }
        }
        console.log(arr);
    }
}
// triangle(6)
// Bubble Sort
// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
//     return arr;
// };
// const bubbleArray = [1, 10, 32, 3, 4, 10, 99, 200, 12, 65, 5151, 8491, 894984, 5];

// console.log(bubbleSort(bubbleArray));
// First iteration
// arr.length - i -1 = > 14 - 0 -1 => 13
// 0 , 0 == > condition 1 > 10 = 1, 10
// second iteration 
// 0, 1 ==> condtion 10 > 32 ==> 10, 32
// Third iteration 
// 0, 2 ==> condtion 32 > 3 ==> 3, 32
// Fourth iteration 
// 0, 3 ==> condtion 3 > 4 ==> 3, 4
// Fifth iteration
// 0, 4 ==> condtion 4 > 10 ==> 4, 10
// Sixth iteration
// 0, 5 ==> condtion 10 > 99 ==>  10, 99
// Seventh iteration
// 0, 6 ==> condtion 99 > 200 ==>   99 , 200
// Eighth iteration
// 0, 7 ==> condtion 200 > 12 ==>   12 , 200
// Nineth iteration
// 0, 8 ==> condtion 12 > 65 ==>   65 , 12
// Reverse a String 
const strReverse = 'Hello';
// console.log(strReverse.split('').reverse().join(''));
function reverseString(str) {
    const arr = Array.from(str);
    const reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    const reversedStr = reversedArr.toString().replace(/,/g, '');
    console.log(reversedStr);
}
// reverseString(strReverse)
// Reverse a string using Recursion
// Syntax of .slice(start, end)
// .slice(start, end) creates a shallow copy of elements from the array (or string) starting at the start index and up to (but not including) the end index.
// If end is negative, it means counting backward from the end of the array or string.
// Palindrome 
function checkPalindrome(str) {
    if (str.length > 0)
        return;
    function reverseStringRecursion(str) {
        if (str.length <= 1)
            return str;
        return str[str.length - 1] + reverseStringRecursion(str.slice(0, -1));
    }
    if (str === reverseStringRecursion(str)) {
        console.log(`${str} is a palindrome`);
    }
    else {
        console.log(`${str} is not a palindrome`);
    }
}
// checkPalindrome("A man")
// Reverse a Int(Numbers)
const reverseANumber = (num) => {
    return parseInt(num.toString().split('').reverse().join(''), 10);
};
// console.log(reverseANumber(1234));
// console.log(typeof(reverseANumber(1234)));
// Sentence Capitalization 
function sentenceCapitalization(str) {
    const stringArray = stringHello.split(' ');
    let emptyArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        const getFirstLetter = stringArray[i].charAt(0).toUpperCase() + stringArray[i].substring(1);
        emptyArray.push(getFirstLetter);
    }
    console.log(emptyArray.join(' '));
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}
// const stringHello = 'hello world'
// console.log('Example : ', stringHello.substring(1));
// console.log(sentenceCapitalization(stringHello));
// FizzBuzz Challenge
// 1. Print numbers 1 to 10
// 2. If number is divisible  by 3 , print Fizz
// 3. if number is divisible by 5, print Buzz
// 4. If number is divisible by 3 and 5 , print FizzBuzz
// 5. Else print the number
function isCheckDivisble(str) {
}
const fizbuz = 'Fizz buzz';
isCheckDivisble(fizbuz);
