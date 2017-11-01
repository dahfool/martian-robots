import { move } from '../direction'

describe('Direction', () => {

    it('Move left ', () => {
        expect(move('L')).toBe([]);
    });

    it('Move right ', () => {
        expect(move('R')).toBe([]);
    });

    it('Move forward ', () => {
        expect(move('F')).toBe([]);
    });

});