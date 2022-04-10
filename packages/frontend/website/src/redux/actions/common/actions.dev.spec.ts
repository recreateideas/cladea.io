/* eslint-disable import/first */
Object.defineProperty(process.env, 'NODE_ENV', {
    value: 'development',
});
import { setIsDev } from './actions';
import types from './types';

describe('setIsDev', () => {
    it('should return isDev false', () => {
        expect(setIsDev).toEqual({ type: types.SET_IS_DEV, data: { isDev: false } });
    });
});
