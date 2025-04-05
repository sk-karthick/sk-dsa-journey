function medianOfTwoArrays(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return medianOfTwoArrays(arr2, arr1);
    }

    let x = arr1.length, y = arr2.length;
    let low = 0, high = x;
    while (low <= high) {
        let partitionX = Math.floor((low + high) / 2);
        let partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        let maxLeftX = (partitionX === 0) ? -Infinity : arr1[partitionX - 1];
        let minRightX = (partitionX === x) ? Infinity : arr1[partitionX];

        let maxLeftY = (partitionY === 0) ? -Infinity : arr2[partitionY - 1];
        let minRightY = (partitionY === y) ? Infinity : arr2[partitionY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            if ((x + y) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }
    throw new Error("Input arrays are not sorted");
}

console.log(medianOfTwoArrays([1, 2], [3, 4]));
