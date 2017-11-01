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


export const updateGrid = (grid, currentPosition, newPosition) => {

    const updatedGrid = grid.map(arr => arr.slice());

    updatedGrid[newPosition[1]-1][newPosition[0]-1] = 'robot';
    return updatedGrid.reverse();
};