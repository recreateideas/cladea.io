import { HeroMessage } from './HeroMessage';
import { TestProvider } from 'src/tests';
import { Container } from './styledComponents';

const { mountWithProviderAndTheme } = TestProvider();
describe('<HeroMessage/>', () => {
    it('should render', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(<HeroMessage message="Some Message" />, state);
        expect(root).toMatchSnapshot();
    });
    it('should render the error message by default', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(<HeroMessage message="Some Message" />, state);
        const container = root.find(Container).find('.hero-message.error');
        expect(container.length).toBeTruthy();
    });
    it('should render the error message with the prop', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(
            <HeroMessage message="Some Message" type="error" />,
            state
        );
        const container = root.find(Container).find('.hero-message.error');
        expect(container.length).toBeTruthy();
    });
    it('should render the warn message with the prop', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(
            <HeroMessage message="Some Message" type="warn" />,
            state
        );
        const container = root.find(Container).find('.hero-message.warn');
        expect(container.length).toBeTruthy();
    });
    it('should render the success message with the prop', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(
            <HeroMessage message="Some Message" type="success" />,
            state
        );
        const container = root.find(Container).find('.hero-message.success');
        expect(container.length).toBeTruthy();
    });
});
