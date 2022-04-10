import { Dispatch } from 'redux';
import { LocationDescriptor } from 'history';
import { createMatchSelector, push, RouterRootState } from 'connected-react-router';
import types from './types';

export const setRouteParams =
    (path: string | string[]) => (dispatch: Dispatch, getState: () => RouterRootState<unknown>) => {
        const matchSelector = createMatchSelector(path);
        const matched = matchSelector(getState());

        if (matched?.params) {
            dispatch({
                type: types.SET_ROUTE_PARAMS,
                data: { params: matched.params },
            });
        }
    };

export const navigateTo = (path: LocationDescriptor) => (dispatch: Dispatch) => {
    dispatch(push(`${path}`));
};
