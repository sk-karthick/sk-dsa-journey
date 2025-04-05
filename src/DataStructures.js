"use strict";
const str = new String();
// console.log(str);
const userName = 'Karthick';
const getUserName = new String(userName)[1];
// console.log(getUserName);
// Array
console.log('-------------------------------------------------');
const arrayNew = new Array(5);
for (let i = 0; i <= 5; i++) {
    arrayNew[i] = i;
}
// console.log(arrayNew);
const myName = 'Karthick';
const newArray = Array.from(myName);
// console.log(newArray);
const splitArray = myName.split('');
// console.log(splitArray);
// console.log(splitArray.concat(splitArray));
// const numberArray = [1, 2, 3, 4, 5];
// console.log(numberArray.reduce((acc, val) => {
//     return acc + val;
// }, 0));
// console.log(numberArray.map((data) => { return data * 2 }))
// console.log(numberArray.filter((data) => { return data % 2 == 0 }))
// const userKarthick = 'Karthick';
// const userArray = Array.from(userKarthick)
// // Accessing first element of an array
// console.log(userArray[0]);
// // Finding the lenght of the  array
// console.log(userArray.length - 1);
// // Accessing middle element of the array
// console.log(userArray[Math.round(userArray.length / 2)])
console.log('----------------------------------------------------------------');
// Objects
const person = {
    name: 'Karthick',
    age: 24,
    gender: 'male',
    greet: function () { return this.age; }
};
person.greet();
// // accessing object elements
// console.log(person.name);
// console.log(person['gender']);
// const deleteGender = delete person?.gender
// console.log(deleteGender);
// console.log(person.greet());
