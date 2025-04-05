// Data strcuture:
// ---------------
//     A data strcuture is a  specific way  of organizing, storing and 
//     accessing data.


// Algorithms:
// -----------
//     A set of instructions that tells a computer how to do something, or you
//     can also say step-by-step solution of the problem is called Algorithms.



// Problem for example 

// Create an array with 5 students names, after that create a function
//  which takes 2 parameters(allStudents , studentName) iterates
//  over all students and fint that specific user student name.

// Data Sturcture.
const allStudents = ['SK', 'kalai', 'Bala', 'Ram', 'Senthil']
const studentName = 'Senthil'


// Algorithm for finding specific user.
function findStudent(allStudents, studentName) {
    for (let i = 0; i < allStudents.length; i++) {
        if (allStudents[i] === studentName) {
            console.log(allStudents[i])
        }
    }
}
findStudent(allStudents, studentName)


const specificUser = allStudents.filter(user => user === studentName).toString();
console.log(specificUser)


// Find is a callback function.
console.log(allStudents.find((foundName) => studentName === foundName ))


// Why I have knowledge in algorithms:
//  The ultimate goal is problem solver
//      1 . Efficient problem solving skills
//      2 . Algorithmic awareness
//      3 . Stronger coding skills
//      4 . Coding confidence
//      5. Efficiency export
//      6. Improved Logical thinking ability to solve problems
//      7. Innovation inspiration
//      8. Critical thinking champion
//      9. Obviously for successing interviews.


// Big O
// Big O notation helps us understand how long an algorithm will take to 
// run or how much memory it will need as the amount of data it handles grows.


// O(n) in DSA?
//     O(n) is a way to describe the time complexity of an algorithm
//     using Big-O notation. It represents how the runtime of an algorithm
//     increases linearly with the size of the input. In O(n), the runtime grows
//     proportionally to the input size, meaning that if the input size
//     doubles, the runtime will also approximately double.