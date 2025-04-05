

// Interview Questions:
// -----------------------


const array = new Array(3).fill({ x: 2 })

array[0] = 3;
array[1] = 3;
array[2].x = 3;

console.log(array)


// -----------------------------------------
// Whenever provide a start and end index of substring method
//  js automatically twist their indices whethere start index lower than 
//  end index
const subString = 'Learn'
console.log(subString.substring(5, 1))

//----------------------------------------------------
let x = {
    flat: 1,
    toString: function () {
        return this.flat++
    }
};

console.log(x)
setTimeout(() => {
    console.log(x)
}, 0)

if (x == 1 && x == 2 && x == 3) {
    console.log('HI xx',x)
}
//----------------------------------------------------


// In this example js will initiallized x become hoisted with undefined
// in this first line undefind becomes NAN because of type coeshion
// without assigned a number or data , already hosted at undefined.
js++;
console.log(js);
var js = 20;


// // variable scoping
// var a = 10;

// function Print_number (){
//     const a = 20
//     console.log(a)
// }
// Print_number()
// console.log(a)
