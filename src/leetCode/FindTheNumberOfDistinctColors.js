// LeetCode 3160: Find the Number of Distinct Colors Among the Balls:


// Approach
// Use a Map (ballToColor) to track the color of each ball.
// Use a Map (colorCount) to maintain the count of each color.
// Process each query:
// If the ball was previously colored, decrease the count of its old color.
// Assign the new color to the ball.
// Increase the count of the new color.
// Store the number of distinct colors in the result array.


function queryResults(limit, query) {
    let ballToColor = new Map();
    let colorCount = new Map();
    let result = [];

    for (let [ball, color] of query) {
        if (ballToColor.has(ball)) {
            let prevColor = ballToColor.get(ball);
            colorCount.set(prevColor, colorCount.get(prevColor) - 1);
            if (colorCount.get(prevColor) === 0) {
                colorCount.delete(prevColor);
            }
        }

        ballToColor.set(ball, color);
        colorCount.set(color, (colorCount.get(color) || 0) + 1);
        result.push(colorCount.size);
    }

    return result;
}

// Example Usage
let limit = 4;
let queries = [[0,1],[1,2],[2,2],[3,4],[4,5]];
console.log(queryResults(limit, queries)); 


// Time & Space Complexity
// Time Complexity: O(n), since each query runs in constant time.
// Space Complexity: O(n), due to the two Maps storing ball colors and color counts.