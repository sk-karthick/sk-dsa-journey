
// for(let i=0; i<arr.length; i++) {
//     if(arr[i] == target) {
//         console.log("Arr" , arr[i])
//     }
// }




// Binary Search

const arr = [1, 2, 3, 4, 5, 6, 7];
// index    [0, 1, 2, 3, 4, 5, 6]
const target = 5;

function binarySearch() {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        const mid = Math.round((left + right) / 2)
        if (arr[mid] == target) {
            return arr[mid]
        }
        else if (arr[mid] < target) {
            left = mid + 1
        }
        else if (arr[mid] > target) {
            right = mid - 1
        }
    }
}


console.log("binary Search", binarySearch());



// BODMAS rule

// 1. B - Border
// 2. O - Orders
// 3. D - divide
// 4. M - multiply
// 5. A - Addition
// 6. S - subtraction