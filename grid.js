export const createGrid = (x, y) => {

    let grid = [];

    for (let i = 0; i < y; i++) {
        grid.push([]);
        for(let r = 0; r < x; r++) {
            grid[i].push('x')
        }
    }
    return grid;
};