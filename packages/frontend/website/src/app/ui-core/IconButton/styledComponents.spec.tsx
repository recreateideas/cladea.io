import { Container } from './styledComponents';
import { TestProvider } from 'src/tests';

const { renderWithProviderAndTheme } = TestProvider({});

describe('IconButton - styledComponents', () => {
    describe('<Container/>', () => {
        describe('shape=default', () => {
            it('should render from left', () => {
                const root = renderWithProviderAndTheme(<Container />);
                expect(root).toMatchSnapshot();
            });
        });
        describe('shape=square', () => {
            it('should render from left', () => {
                const root = renderWithProviderAndTheme(<Container shape="square" />);
                expect(root).toMatchSnapshot();
            });
        });
        describe('disabled', () => {
            it('should render disabled button', () => {
                const root = renderWithProviderAndTheme(<Container shape="square" disabled />);
                expect(root).toMatchSnapshot();
            });
        });
    });
});
