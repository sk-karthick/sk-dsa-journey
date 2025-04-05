"use strict";
//  1. A callback is a function passed into another function as an argument,
//   which is then invoked inside the outer function to complete some kind of routine or    action.
//  2. Callbacks are a way to make sure certain code doesn't execute until other code has already finished execution
//  3. Callbacks are used in many ways, such as event handlers, setTimeout, setInterval, and AJAX requests.
//  4. There are two types of callbacks: synchronous and asynchronous.
function greetConsole(name) {
    console.log("Hello ", name);
}
function getGreetName(callback) {
    let name = 'Karthick';
    callback(name);
}
// getGreetName(greetConsole);
// getGreetName((name: string): void => {
//     console.log("Hello ", name);
// });
function add(a, b) {
    console.log(a + b);
}
function multiply(a, b) {
    console.log(a * b);
}
function calculate(x, y, operation) {
    return operation(x, y);
}
// calculate(10, 20, add)
// calculate(10, 20, multiply)
const array = [1, 2, 3, 4, 5, 6, 7];
// array.forEach(print)
// function print(val:number){
//     console.log(val * 2)
// }
array.forEach((val, index) => {
    console.log(index, val);
    if (index === 1) {
        console.log('Calculate', index, val);
    }
});
