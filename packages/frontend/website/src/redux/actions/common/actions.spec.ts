import { setIsElectron, setServicePorts, getServicePorts, setIsDev } from './actions';
import types from './types';
import { AnyAction } from 'redux';
import { TestProvider } from 'src/tests';

const { mockStore } = TestProvider();

describe('setIsDev', () => {
    it('should return isDev false', () => {
        expect(setIsDev).toEqual({ type: types.SET_IS_DEV, data: { isDev: false } });
    });
});

describe('setIsElectron', () => {
    it('should return the right action', () => {
        const result = setIsElectron(true);
        expect(result).toEqual({ type: types.SET_IS_ELECTRON, data: { isElectron: true } });
    });
});

describe('setServicePorts', () => {
    const mockPorts = {
        'some-service': 11,
    };
    it('should return the right action', () => {
        const result = setServicePorts(mockPorts);
        expect(result).toEqual({
            type: types.SET_SERVICE_PORTS,
            data: { servicePorts: mockPorts },
        });
    });
});

describe('getServicePorts', () => {
    it('should dispatch the right action', () => {
        const store = mockStore({});
        store.dispatch(getServicePorts() as unknown as AnyAction);
        expect(store.getActions()).toEqual([
            {
                type: types.GET_SERVICE_PORTS_SKIPPED,
            },
        ]);
    });
});
