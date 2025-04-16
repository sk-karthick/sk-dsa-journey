function noOfIslands(grid: string[][]) {
    if (!grid || grid.length === 0) return 0

    let count = 0;
    const rows = grid.length;
    const col = grid[0].length

    function dfs(r: number, c: number) {
        if (r < 0 || c < 0 || grid[r][c] === "0" || r >= rows || c >= col) return

        grid[r][c] = "0"

        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    }


    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < col; c++) {
            if (grid[r][c] === "1") {
                count++;
                dfs(r, c)
            }
        }
    }

    return count
}


let grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]

console.log(noOfIslands(grid));
