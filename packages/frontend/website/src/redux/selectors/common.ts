import { Selector } from 'react-redux';
import { IReduxStore, IServicePorts } from '@types';

const servicePorts: Selector<IReduxStore, IServicePorts | undefined> = (state) =>
    state.appState.common.servicePorts;

const isElectron: Selector<IReduxStore, boolean | undefined> = (state) =>
    state.appState.common.isElectron;

const getToggle =
    (toggle: string): Selector<IReduxStore, boolean | undefined> =>
    (state) =>
        state.appState.common.toggles[toggle];

export { isElectron, servicePorts, getToggle };
