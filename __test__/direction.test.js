import { position } from '../direction'

describe('Direction', () => {

    it('Move left ', () => {
        expect(position([1,1],'W')).toEqual([1,0]);
    });

    it('Move up ', () => {
        expect(position([1,1],'N')).toEqual([0,1]);
    });

    it('Move right ', () => {
        expect(position([1,1],'E')).toEqual([1,2]);
    });

    it('Move down ', () => {
        expect(position([1,1],'S')).toEqual([2,1]);
    });

});