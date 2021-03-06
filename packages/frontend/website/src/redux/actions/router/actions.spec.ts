import { TestProvider } from 'src/tests';
import { setRouteParams, navigateTo } from './actions';
import { AnyAction } from 'redux';

const { getStore } = TestProvider();

describe('navigateTo', () => {
    it('should return the right action', () => {
        const store = getStore();
        store.dispatch(navigateTo('/some/path') as unknown as AnyAction);
        expect(store.getActions()).toEqual([
            {
                type: '@@router/CALL_HISTORY_METHOD',
                payload: { method: 'push', args: ['/some/path'] },
            },
        ]);
    });
});

describe('setRouteParams', () => {
    it('should despatch the right action', () => {
        const store = getStore(undefined, { location: { pathname: '/some/value' } });
        store.dispatch(setRouteParams('/some/:param') as unknown as AnyAction);
        expect(store.getActions()).toEqual([
            {
                type: 'SET_ROUTE_PARAMS',
                data: { params: { param: 'value' } },
            },
        ]);
    });
    it('should despatch the action with the right data when no params are matching', () => {
        const store = getStore(undefined, { location: { pathname: '/some' } });
        store.dispatch(setRouteParams('/some/:param') as unknown as AnyAction);
        expect(store.getActions()).toEqual([]);
    });
});
