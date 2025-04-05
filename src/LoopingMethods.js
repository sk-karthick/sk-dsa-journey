"use strict";
// console.log('-------------------------------------------------');
// const array = [1, 2, 3, 4, 5];
// array.forEach((value, index) => {
//     console.log('For Each ', value, index)
// })
// console.log('-------------------------------------------------');
// for (let i = 0; i < array.length; i++) {
//     console.log('For Loop ', array[i], i)
// }
// console.log('-------------------------------------------------');
// // Shift Method for array , it modifies the original array
// while (array.length > 0) {
//     console.log('While Loop ', array.shift())
// }
console.log('-------------------------------------------------');
let users = [{ name: 'Karthick', age: 30 }, { name: 'Kumar', age: 25 }, { name: 'Raj', age: 35 }];
let userDetails = [['karthick', 'sk'], ['kalai', 'pk']];
// for(let i= 0; i< users.length; i++) {
//     console.log('Users' , users[i])
// }
for (let user of users) {
    console.log(user);
}
// for (let couple of userDetails) {
//     console.log(couple)
// }
userDetails.forEach((data) => {
    console.log(data);
});
console.log('-------------------------------------------------');
// // Map, Filter, Reduce
// const newArray = [1, 2, 3, 4, 5];
// console.log(newArray.filter((item) => item % 2 === 0))
// console.log(newArray.map((item) => item * 2))
