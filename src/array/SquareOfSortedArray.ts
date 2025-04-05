// First we try to sqaure a each element
//  Then we sort the array



// Native Approach
// O(n log n)(Due to sorting)
// O(n) -> New array created which is by using of map(SPACE COMPLEXITY)
function sortSquares(nums: Array<number>) {
    return nums.map((num) => num * num).sort((a, b) => a - b)
}

let nums = [-4, -1, 0, 3, 10]
// console.log(sortSquares(nums));


// Two pointers approach
// O(n) --> Time and Space complexity
function sortedSquares(nums: Array<number>) {
    let n = nums.length;
    let result = new Array(n)
    let left = 0, right = n - 1, position = n - 1

    while (left <= right) {
        let leftSquare = nums[left] * nums[left]
        let rightSquare = nums[right] * nums[right]

        if (leftSquare > rightSquare) {
            result[position] = leftSquare
            left++
        } else {
            result[position] = rightSquare
            right--
        }
        position--
    }

    return result
}

console.log(sortedSquares(nums));
