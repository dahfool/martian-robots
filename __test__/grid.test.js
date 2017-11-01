import { createGrid } from '../grid'


describe('Grid', () => {

    it('Create a (5,3) grid ', () => {
        expect(createGrid(5,3)).toEqual([
            ['x','x','x','x','x'],
            ['x','x','x','x','x'],
            ['x','x','x','x','x']
        ]);
    });

    it('Create a (5,6) grid ', () => {
        expect(createGrid(5,6)).toEqual([
            ['x','x','x','x','x'],
            ['x','x','x','x','x'],
            ['x','x','x','x','x'],
            ['x','x','x','x','x'],
            ['x','x','x','x','x'],
            ['x','x','x','x','x']
        ]);
    });

});


