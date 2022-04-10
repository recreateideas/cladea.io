import { Container } from './styledComponents';
import { TestProvider } from 'src/tests';

const { renderWithProviderAndTheme } = TestProvider({});

describe('styledComponents', () => {
    describe('<Container/>', () => {
        it('should render', () => {
            const root = renderWithProviderAndTheme(<Container />);
            expect(root).toMatchSnapshot();
        });
    });
});
