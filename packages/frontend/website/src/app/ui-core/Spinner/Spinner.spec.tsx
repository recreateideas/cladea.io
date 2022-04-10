import { Spinner } from './Spinner';
import { TestProvider } from 'src/tests';

const { mountWithProviderAndTheme } = TestProvider();
describe('<Spinner/>', () => {
    it('should render', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(<Spinner />, state);
        expect(root).toMatchSnapshot();
    });
    it('should render the error more', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(<Spinner error />, state);
        expect(root).toMatchSnapshot();
    });
});
