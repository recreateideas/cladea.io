import { Exagon } from './Exagon';
import { TestProvider } from 'src/tests';

const { mountWithProviderAndTheme } = TestProvider();
describe('<Exagon/>', () => {
    it('should render', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(<Exagon />, state);
        expect(root).toMatchSnapshot();
    });
});
