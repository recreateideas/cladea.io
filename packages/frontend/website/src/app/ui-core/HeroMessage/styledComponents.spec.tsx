import { Container } from './styledComponents';
import { TestProvider } from 'src/tests';

const { renderWithProviderAndTheme } = TestProvider({});

describe('Container - styledComponents', () => {
    describe('<Container/>', () => {
        it('should render error styles', () => {
            const root = renderWithProviderAndTheme(<Container type="error" />);
            expect(root).toMatchSnapshot();
        });
        it('should render warn styles', () => {
            const root = renderWithProviderAndTheme(<Container type="warn" />);
            expect(root).toMatchSnapshot();
        });
        it('should render success styles', () => {
            const root = renderWithProviderAndTheme(<Container type="success" />);
            expect(root).toMatchSnapshot();
        });
    });
});
