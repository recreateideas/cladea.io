import { Modal } from './Modal';
import { TestProvider } from '../../../tests';

const { mountWithProviderAndTheme } = TestProvider({});

describe('<Modal/>', () => {
    it('should render', () => {
        const root = mountWithProviderAndTheme(<Modal />);

        expect(root).toMatchSnapshot();
    });
});
