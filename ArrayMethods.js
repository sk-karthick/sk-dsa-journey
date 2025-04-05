
const arr1 = Array(3); // Creates an empty array of size 3
const arr2 = Array.of(1, 2, 3); // [1, 2, 3]
const arr3 = Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']


const array = [1, 2, 3, 4, 5, 6, 7]
console.table(array)


// POP - Removing last element of an array.
// when we print pop method returns a number or particular element data type
const arrayPop = array.pop()
console.log('Pop Method')
console.table(array)

// Push - Add element in last position of an array
const arrayPush = array.push(8)
console.log('Push Method')
console.table(array)

// unshift - Add first element of an array
const arrayUnShift = array.unshift(5)
console.log('UnShift Method')
console.table(array)

// Shift - Remove the first element of an array
const arrayShift = array.shift()
console.log('Shift Method')
console.table(array)


// Searching
// indexOf(): Returns the index of the first occurrence.
// lastIndexOf(): Returns the index of the last occurrence.
// includes(): Checks if an element exists in the array.
// find(): Returns the first element that satisfies a condition.
// findIndex(): Returns the index of the first element that satisfies a condition.


// List abstract data type (ADT)


// --> List is an ordered sequence of data
// --> Each item stored in a list called element.
//  --> In js, The element in a list can be of any data type.
//  --> A list with a no elements called empty list.
//  --> No.of elements stored in a list is called length of the list.

// listSize (property)Number of elements in list
// pos (property)Current position in list
// length (property)Returns the number of elements in list
// clear (function)Clears all elements from list
// toString (function)Returns string representation of list
// getElement (function) Returns element at current position
// insert (function)Inserts new element after existing element
// append (function)Adds new element to end of list
// remove (function)Removes element from list
// front (function)Sets current position to first element of list
// end (function)Sets current position to last element of list
// prev (function)Moves current position back one element
// next (function)Moves current position forward one element
// currPos (function)Returns the current position in list
// moveTo (function)Moves the current position to specified position




// Create a Person class that stores a person’s name and their gender. Create a list of
// at least 10 Person objects. Write a function that displays all the people in the list of
// the same gender.

class Person {
    constructor(name, gender) {
        this.name = name; // Person's name
        this.gender = gender; // Person's gender
    }
}

const people = [
    new Person("Alice", "Female"),
    new Person("Bob", "Male"),
    new Person("Catherine", "Female"),
    new Person("David", "Male"),
    new Person("Eve", "Female"),
    new Person("Frank", "Male"),
    new Person("Grace", "Female"),
    new Person("Hank", "Male"),
    new Person("Ivy", "Female"),
    new Person("Jack", "Male"),
];

function displayPeopleByGender(list, targetGender) {
    console.log(`People with gender '${targetGender}':`);
    list
        .filter(person => person.gender === targetGender) // Filter by gender
        .forEach(person => console.log(person.name)); // Display their names
}

// displayPeopleByGender(people, "Female");
// displayPeopleByGender(people, "Male");



// Write a function that inserts an element into a list only if the element to be inserted
// is smaller than any of the elements currently in the list.


class ListOfElements {
    constructor() {
      this.elements = [];
    }
  
    insertIfSmaller(newElement) {
      if (
        this.elements.length === 0 || newElement < Math.min(...this.elements) 
      ) {
        this.elements.push(newElement);
        console.log(`${newElement} was added to the list.`);
      } else {
        console.log(`${newElement} was not added because it's not smaller.`);
      }
    }
  
    displayList() {
      console.log("Current List:", this.elements);
    }
  }
  
  const myList = new ListOfElements();
  
//   myList.insertIfSmaller(10); // 10 will be added
//   myList.insertIfSmaller(20); // 20 will not be added
//   myList.insertIfSmaller(5);  // 5 will be added
//   myList.insertIfSmaller(15); // 15 will not be added
  
//   myList.displayList(); // Display the final list
  