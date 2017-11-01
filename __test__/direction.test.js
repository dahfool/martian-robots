import { move } from '../direction'

let grid = [
    ['x','x','x','x','x'],
    ['x','x','x','x','x'],
    ['x','x','x','x','x']
];

describe('Direction', () => {

    it('Move left ', () => {
        expect(move('L', [1,2], grid)).toBe([]);
    });

    it('Move right ', () => {
        expect(move('R')).toBe([]);
    });

    it('Move forward ', () => {
        expect(move('F', [1,1], grid)).toEqual([1,2]);
    });

});