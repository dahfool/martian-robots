import { orientate } from './orientation'

export const move = (direction, currentPosition, orientation) => {

    let newCoordinates = 0,
        newPosition = 0;


    direction.forEach(item => {

        switch (item) {
            case 'F':
                newCoordinates = (newCoordinates === 0) ? position(currentPosition, newPosition) : position(newCoordinates, newPosition);
                break;
            default:
                newPosition = (newPosition === 0) ? orientate(item, orientation) : orientate(item, newPosition)

        }

    });

    return {
        coordinate: newCoordinates,
        direction: newPosition
    }
};




export const position = (coordinates, direction) => {

    switch(direction) {
        case 'W':
            return coordinates
                .slice(0, 1)
                .concat(coordinates[1]-1)
                .concat(coordinates.slice(2));

        case 'E':
            return coordinates
                .slice(0, 1)
                .concat(coordinates[1]+1)
                .concat(coordinates.slice(2));
        case 'N':
            return coordinates
                .slice(1, 0)
                .concat(coordinates[0]-1)
                .concat(coordinates.slice(1));
        case 'S':
            return coordinates
                .slice(1, 0)
                .concat(coordinates[0]+1)
                .concat(coordinates.slice(1));
    }

};
