const numRabbits = (answers: number[]): number => {
    const map = new Map<number, number>();
    let totalRabbits = 0;

    for (let answer of answers) {
        map.set(answer, (map.get(answer) || 0) + 1);
    }
    console.log(map);


    for (let [answer, count] of map.entries()) {
        const groupSize = answer + 1;
        const groups = Math.ceil(count / groupSize);
        totalRabbits += groups * groupSize;
    }

    return totalRabbits;
};

console.log(numRabbits([1, 1, 2]));


