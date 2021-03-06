import { AuthenticatedRoute } from './AuthenticatedRoute';
import { TestProvider } from '../../../tests';
jest.mock('../../../redux');
// eslint-disable-next-line import/first
import * as redux from '../../../redux';

const { fullShallow, fullMount } = TestProvider({});

describe('AuthenticatedRoute', () => {
    it('should render', () => {
        const props = {
            render: () => <div />,
        };
        const state = {
            router: {
                location: 'some-location',
            },
        };
        const root = fullShallow(<AuthenticatedRoute {...props} />, state);
        expect(root).toMatchSnapshot();
    });

    it('should call dispatch setRouteParams if path and location props are supplied', () => {
        const props = {
            render: () => <div />,
            path: 'some-path',
            location: {
                pathname: 'some-path-name',
            },
        };
        const state = {
            router: {
                location: 'some-location',
            },
        };
        const {
            actions: { router },
        } = redux;
        const actionSpy = jest.fn();
        const dispatchSpy = jest.fn();
        jest.spyOn(router, 'setRouteParams').mockReturnValue(actionSpy);
        jest.spyOn(redux, 'useDispatch').mockReturnValue(dispatchSpy);
        fullMount(<AuthenticatedRoute {...props} />, state);
        expect(dispatchSpy).toHaveBeenCalledWith(actionSpy);
    });

    it('should NOT call dispatch setRouteParams if no path and location props are supplied', () => {
        const props = {
            render: () => <div />,
        };
        const state = {
            router: {
                location: 'some-location',
            },
        };
        const dispatchSpy = jest.fn();
        jest.spyOn(redux, 'useDispatch').mockReturnValue(dispatchSpy);
        fullMount(<AuthenticatedRoute {...props} />, state);
        expect(dispatchSpy).not.toHaveBeenCalled();
    });
});
