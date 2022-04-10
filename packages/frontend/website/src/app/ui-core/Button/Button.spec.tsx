import { Button } from './Button';
import { TestProvider } from '../../../tests';

const { mountWithProviderAndTheme, fullMount } = TestProvider({});

describe('<Button/>', () => {
    it('should render', () => {
        const root = mountWithProviderAndTheme(<Button />);

        expect(root).toMatchSnapshot();
    });
    it('should render the Link if withLink is not undefined', () => {
        const root = fullMount(<Button {...{ withLink: 'http://bla-bla.com' }} />);
        const link = root.find('Link');
        expect(link.length).toBe(1);
    });
});
