export const move = (direction, currentPosition, grid) => {
    switch(direction) {
        case 'L':
            break;
        case 'R':
            break;
        case 'F':
            return updateHorizontalPosition(currentPosition)
        default:
    }
};

const updateHorizontalPosition = (coordinates) => {
    return coordinates
        .slice(0, 1)
        .concat(coordinates[1]+1)
        .concat(coordinates.slice(2));

};
