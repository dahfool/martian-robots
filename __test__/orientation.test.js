import { orientate } from '../orientation'

describe('Orientation', () => {

    it('Set orientation to North ', () => {
        expect(orientate('N')).toBe([]);
    });

    it('Set orientation to South ', () => {
        expect(orientate('S')).toBe([]);
    });

    it('Set orientation to East ', () => {
        expect(orientate('E')).toBe([]);
    });

    it('Set orientation to West ', () => {
        expect(orientate('W')).toBe([]);
    });

});


