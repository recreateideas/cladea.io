import { IconButton } from './IconButton';
import { TestProvider } from 'src/tests';

const { mountWithProviderAndTheme } = TestProvider();
describe('<IconButton/>', () => {
    it('should render', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(<IconButton>some label</IconButton>, state);
        expect(root).toMatchSnapshot();
    });
});
