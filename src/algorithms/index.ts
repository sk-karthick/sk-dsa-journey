


// Searching Algorithms


function bubbleSort(arr: number[]) {
    return arr
}

// console.log("Bubble Sort : ", bubbleSort([1, 2, 3, 4, 5, 6, 7]));



function search2DMatrix(matrix: [], target: Number) {
    let result:[] = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            result.push(matrix[j])
        }
    }
    return result;
}
let matrix = [[1, 2, 4, 8], [10, 11, 12, 13], [14, 20, 30, 40]]
let target = 10;
console.log("search2DMatrix : ", search2DMatrix(matrix, target));
