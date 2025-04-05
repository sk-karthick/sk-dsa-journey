// Bubble Sort Algorithms


function bubbleSort(arr) {
    const lengthOfArray = arr.length
    if (lengthOfArray === 1) {
        return arr
    }
    for (let i = 0; i < lengthOfArray; i++) {
        let swapper = false;
        for (let j = 0; j < lengthOfArray - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapper = true;
            }
        }
        if (!swapper) {
            break;
        }
    }
    return arr
}


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

const sortArray = numbers.sort((a, b) => a - b)

console.log(bubbleSort(numbers))
console.log(sortArray)

// Linear search 

const arr = [11, 22, 13, 5, 6, 10, 12, 12]
const target = 5

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] === target) {
            console.log(arr[i])
            console.log('Index of target', i)
        }
}

linearSearch(arr, target)

