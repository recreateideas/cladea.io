import { initialState } from '../store';
import { isElectron, servicePorts, getToggle } from './common';
import { IReduxStore } from '@types';

beforeEach(() => {
    jest.resetAllMocks();
});
describe('isElectron', () => {
    const state = { appState: initialState } as IReduxStore;
    it('should select the right data', () => {
        state.appState.common.isElectron = true;
        const result = isElectron(state);
        expect(result).toBe(true);
    });
});

describe('servicePorts', () => {
    const state = { appState: initialState } as IReduxStore;
    it('should select the right data', () => {
        state.appState.common.servicePorts = { 'some-service': 1111 };
        const result = servicePorts(state);
        expect(result).toEqual({ 'some-service': 1111 });
    });
});

describe('getToggle', () => {
    const state = { appState: initialState } as IReduxStore;
    it('should select the right data', () => {
        state.appState.common.toggles = { 'some-toggle': true };
        const result = getToggle('some-toggle')(state);
        expect(result).toEqual(true);
    });
});
