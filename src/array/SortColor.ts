
// red = 0;
// white - 1
// Blue - 2


function sortColors(colors: Array<number>) {
    let left = 0, right = colors.length - 1, mid = 0;
    
    while (mid <= right) {
        if (colors[mid] === 0) {
            [colors[left], colors[mid]] = [colors[mid], colors[left]]
            left++;
            mid++
        } else if (colors[mid] === 1) {
            mid++
        } else {
            [colors[mid], colors[right]] = [colors[right], colors[mid]]; 
            right--
        }
    }

    return colors
}

console.log(sortColors([2, 0, 2, 1, 1, 0]));
