import { orientate } from '../orientation'

describe('Orientation', () => {

    it('Set orientation to North ', () => {
        expect(orientate('R', 'W')).toBe('N');
    });

    it('Set orientation to South ', () => {
        expect(orientate('L', 'W')).toBe('S');
    });

    it('Set orientation to East ', () => {
        expect(orientate('R', 'N')).toBe('E');
    });

    it('Set orientation to West ', () => {
        expect(orientate('L','N')).toBe('W');
    });

});


