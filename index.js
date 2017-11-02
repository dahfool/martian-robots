import { createGrid, updateGrid} from "./grid";
import { move } from './direction'

let planetMars = createGrid(5,3);

const initRobot = (coordinates, orientation, direction) => {

    let getLastPosition = move(direction.split(''), coordinates, orientation, planetMars)

    console.log(getLastPosition);
    console.log(updateGrid(planetMars, getLastPosition.coordinate));


    return {
        getLastPosition
    }
};


initRobot([1,1], 'E', 'RFRFRFRF');
// initRobot([3,3], 'N', 'FRRFLLFFRRFLL');
// initRobot([0,3], 'W', 'LLFFFLFLFL');

// Sample Input
// 53
// 11E RFRFRFRF
// 32N FRRFLLFFRRFLL
// 03W LLFFFLFLFL


// Sample Output
// 11E
// 33NLOST
// 23S