import { HeaderText, Header, DefaultContainer } from './styledComponents';
import { TestProvider } from 'src/tests';

const { renderWithProviderAndTheme } = TestProvider({});

describe('styledComponents', () => {
    describe('<HeaderText/>', () => {
        it('should render', () => {
            const root = renderWithProviderAndTheme(<HeaderText />);
            expect(root).toMatchSnapshot();
        });
        it("should render with size='medium'", () => {
            const root = renderWithProviderAndTheme(<HeaderText size="medium" />);
            expect(root).toMatchSnapshot();
        });
    });
    describe('<Header/>', () => {
        it('should render', () => {
            const root = renderWithProviderAndTheme(<Header />);
            expect(root).toMatchSnapshot();
        });
    });
    describe('<DefaultContainer/>', () => {
        it('should render', () => {
            const root = renderWithProviderAndTheme(<DefaultContainer />);
            expect(root).toMatchSnapshot();
        });
        it('should render the active style', () => {
            const root = renderWithProviderAndTheme(<DefaultContainer isActive={true} />);
            expect(root).toMatchSnapshot();
        });
    });
});
