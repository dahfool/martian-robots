import { createGrid, updateGrid } from '../grid'


describe('Grid', () => {

    it('Create a (5,3) grid ', () => {
        expect(createGrid(5,3)).toEqual([
            ['x','x','x','x','x','x'],
            ['x','x','x','x','x','x'],
            ['x','x','x','x','x','x'],
            ['x','x','x','x','x','x']
        ]);
    });

    it('Create a (5,6) grid ', () => {
        expect(createGrid(5,6)).toEqual([
            ['x','x','x','x','x','x'],
            ['x','x','x','x','x','x'],
            ['x','x','x','x','x','x'],
            ['x','x','x','x','x','x'],
            ['x','x','x','x','x','x'],
            ['x','x','x','x','x','x'],
            ['x','x','x','x','x','x']

        ]);
    });

    it('Update grid',() => {

        let grid =  [
            ['x','x','x','x','x'],
            ['x','x','x','x','x'],
            ['x','x','x','x','x'],
        ];

        expect(updateGrid(grid,[0,0])).toEqual([
            ['x','x','x','x','x'],
            ['x','x','x','x','x'],
            ['robot','x','x','x','x']
        ]);

        expect(updateGrid(grid,[1,2])).toEqual([
            ['x','robot','x','x','x'],
            ['x','x','x','x','x'],
            ['x','x','x','x','x']
        ]);


    })

});


