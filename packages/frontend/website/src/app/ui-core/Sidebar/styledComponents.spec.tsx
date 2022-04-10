import { Container, Content, Handle } from './styledComponents';
import { TestProvider } from 'src/tests';

const { renderWithProviderAndTheme } = TestProvider({});

describe('Sidebar - styledComponents', () => {
    describe('<Container/>', () => {
        it('should render from left by default', () => {
            const root = renderWithProviderAndTheme(<Container type="overlay">ciao</Container>);
            expect(root).toMatchSnapshot();
        });
        it('should render from left', () => {
            const root = renderWithProviderAndTheme(
                <Container type="overlay" from="left">
                    ciao
                </Container>
            );
            expect(root).toMatchSnapshot();
        });
        it('should render from right', () => {
            const root = renderWithProviderAndTheme(
                <Container type="overlay" from="right">
                    ciao
                </Container>
            );
            expect(root).toMatchSnapshot();
        });
    });
    describe('<Content/>', () => {
        describe('isOpen=true', () => {
            it('should render from left and width 200 by default', () => {
                const root = renderWithProviderAndTheme(<Content isOpen={true} />);
                expect(root).toMatchSnapshot();
            });
            it('should render from left', () => {
                const root = renderWithProviderAndTheme(
                    <Content isOpen={true} width={200} from="left" />
                );
                expect(root).toMatchSnapshot();
            });
            it('should render from right', () => {
                const root = renderWithProviderAndTheme(
                    <Content isOpen={true} width={200} from="right" />
                );
                expect(root).toMatchSnapshot();
            });
        });
        describe('isOpen=false', () => {
            it('should render from left', () => {
                const root = renderWithProviderAndTheme(
                    <Content isOpen={false} width={200} from="left" />
                );
                expect(root).toMatchSnapshot();
            });
            it('should render from right', () => {
                const root = renderWithProviderAndTheme(
                    <Content isOpen={false} width={200} from="right" />
                );
                expect(root).toMatchSnapshot();
            });
        });
    });
    describe('<Handle/>', () => {
        it('should render', () => {
            const root = renderWithProviderAndTheme(<Handle />);
            expect(root).toMatchSnapshot();
        });
    });
});
