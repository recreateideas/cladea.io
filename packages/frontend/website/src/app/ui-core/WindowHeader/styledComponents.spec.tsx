import { SidebarSection } from './styledComponents';
import { TestProvider } from 'src/tests';

const { renderWithProviderAndTheme } = TestProvider({});

describe('styledComponents', () => {
    describe('<SidebarSection/>', () => {
        it('should render', () => {
            const root = renderWithProviderAndTheme(<SidebarSection />);
            expect(root).toMatchSnapshot();
        });
    });
});
