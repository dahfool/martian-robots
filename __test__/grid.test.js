import { createGrid } from '../grid'


describe('Grid', () => {

    it('Create a (3,2) grid ', () => {
        expect(createGrid(3,3)).toBe([]);
    });

    it('Create a (5,6) grid ', () => {
        expect(createGrid(5,6)).toBe([]);
    });

});


