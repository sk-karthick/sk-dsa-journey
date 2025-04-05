// Move pointers 
// Using two pointers approach
// O(n) -> Time O(1) --> Space

function moveZeros(nums: Array<number>) {

    // let zeros = []
    // let numbers = []

    // for(let num of nums){
    //     if(num === 0){
    //         zeros.push(num)
    //     } else {
    //         numbers.push(num)
    //     }
    // }

    // return [...numbers, ...zeros]


    let n = nums.length;

    if(n === 0) return nums
    let i = 0

    for (let j = 0; j < n; j++) {
        if(nums[j] !== 0){
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++
        }
    }
    return nums
}

console.log(moveZeros([0, 1, 0, 3, 12]));
