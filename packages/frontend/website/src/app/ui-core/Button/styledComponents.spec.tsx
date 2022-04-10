import { StyledButton } from './styledComponents';
import { TestProvider } from 'src/tests';

const { renderWithProviderAndTheme } = TestProvider({});

describe('Button - styledComponents', () => {
    describe('<StyledButton/>', () => {
        it('should render from left', () => {
            const root = renderWithProviderAndTheme(<StyledButton />);
            expect(root).toMatchSnapshot();
        });
    });
});
