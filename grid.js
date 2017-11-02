export const createGrid = (x, y) => {

    let grid = [];

    let i = 0;
    while (i <= y) {
        grid.push([]);
        let r = 0;
        while (r <= x) {
            grid[i].push('x');
            r++
        }
        i++;
    }

    return grid;
};


export const updateGrid = (grid, position) => {

    const updatedGrid = grid.map(arr => arr.slice());

    updatedGrid[position[1]][position[0]] = 'robot';
    return updatedGrid.reverse();
};