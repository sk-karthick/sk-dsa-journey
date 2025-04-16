function countSymmetricInteger(low: number, high: number): number {
    let count = 0;

    for (let i = low; i <= high; i++) {
        const str = i.toString();
        const len = str.length;

        if (len % 2 !== 0) continue;

        const mid = len / 2;
        const leftSum = [...str.slice(0, mid)].reduce((sum, ch) => sum + Number(ch), 0);
        const rightSum = [...str.slice(mid)].reduce((sum, ch) => sum + Number(ch), 0);

        if (leftSum === rightSum) {
            count++;
        }
    }

    return count;
}

console.log(countSymmetricInteger(1, 100));
