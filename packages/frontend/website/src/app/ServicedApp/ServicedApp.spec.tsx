/* eslint-disable import/first */
import { ServicedApp } from './ServicedApp';
jest.mock('../../hooks');
import * as hooks from '../../hooks';
import { TestProvider } from 'src/tests';

const { fullMount } = TestProvider();

describe('<ServicedApp/>', () => {
    it('should render', () => {
        const root = fullMount(<ServicedApp />);
        expect(root).toMatchSnapshot();
    });
    it('should render .setting-up loader when service-ports are undefined', () => {
        jest.spyOn(hooks, 'useServicePorts').mockReturnValue(undefined);
        const wrapper = fullMount(<ServicedApp />);
        const Loader = wrapper.exists('.setting-up');
        expect(Loader).toBeTruthy();
    });

    it('should render App when isHealthy is true', () => {
        jest.spyOn(hooks, 'useServicePorts').mockReturnValue({ 'some-service': 1111 });
        jest.spyOn(hooks, 'useHealthCheck').mockReturnValue(true);
        const wrapper = fullMount(<ServicedApp />);
        const Loader = wrapper.exists('App');
        expect(Loader).toBeTruthy();
    });
    it('should render .checking loader when isHealthy is undefined', () => {
        jest.spyOn(hooks, 'useServicePorts').mockReturnValue({ 'some-service': 1111 });
        jest.spyOn(hooks, 'useHealthCheck').mockReturnValue(undefined);
        const wrapper = fullMount(<ServicedApp />);
        const Loader = wrapper.exists('.checking');
        expect(Loader).toBeTruthy();
    });
    it('should render .not-responding loader when service-ports are loaded and isHealthy is false', () => {
        jest.spyOn(hooks, 'useServicePorts').mockReturnValue({ 'some-service': 1111 });
        jest.spyOn(hooks, 'useHealthCheck').mockReturnValue(false);
        const wrapper = fullMount(<ServicedApp />);
        const Loader = wrapper.exists('.not-responding');
        expect(Loader).toBeTruthy();
    });
});
