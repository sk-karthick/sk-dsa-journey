// OOPS: Object Oriented Programming System or language.



// When it as function in object , we call. it as method

const person = {
    name: 'Rahul',
    age: 23,
    bio: function () {
        return `${this.name} is ${this.age} years old`;
    },
    introduceSelf() {
        return `Hi, I am ${this.name}`;
    }
}

console.log(person.introduceSelf());



function createPerson(name, age) {
    const obj = {}
    obj.name = name;
    obj.age = age;
}































// Class in js

// Classes are a template for creating objects. They encapsulate data with code
//  to work on that data. Classes in JS are built on prototypes but also have
//  some syntax and semantics that are not shared with ES5 classalike semantics.


//  In class objecct is created using new keyword.

//  In class objects are called instances.

class BubbleSort {

    BubbleSortFunction(arr) {
        const lengthOfArray = arr.length
        for (let i = 0; i < lengthOfArray; i++) {
            for (let j = 0; j < lengthOfArray - i - 1; j++) {
                console.log(arr[i] + '  ' + arr[j])
            }
        }
    }
}

// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]
// const bubbleSort = new BubbleSort();
// bubbleSort.BubbleSortFunction(numbers);
// bubbleSort.employee = 'Rahul';
// console.log(bubbleSort.employee)



// "{ This }" keyword respresent the object that is executing the current function.

class Employee {
    print(name) {
        console.log(name)
        this.employeeName = name;
    }
    specialPrint() {
        console.log("Special Printer Method", this.employeeName)
    }
}


// const employee = new Employee();
// employee.print('Rahul');
// employee.specialPrint();


// Setter method is used to set the value of the object.

// Difference between method and setter in js is that 
// setter is used to set the value of the object.
// Mandatory to passing the parameters.


// Getter method is used to get the value of the object.
//  mandaory using return keyword.
class EmployeeSetter {
    #employorname = 'karthick';

    set employeeName(name) {
        this.#employorname = name;
    }
    employeeNames() {
        console.log(this.#employorname);
    }

    get employeName() {
        return this.#employorname;
    }
}

// const employeeSetter = new EmployeeSetter();
// // employeeSetter.employeeName = 'Rahul';
// employeeSetter.employeeNames();
// console.log(employeeSetter.employeName);