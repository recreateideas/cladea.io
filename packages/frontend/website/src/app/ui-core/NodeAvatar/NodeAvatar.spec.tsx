import { NodeAvatar } from './NodeAvatar';
import { TestProvider } from 'src/tests';
import { DefaultContainer } from './styledComponents';

const { mountWithProviderAndTheme } = TestProvider();
describe('<NodeAvatar/>', () => {
    it('should render', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(<NodeAvatar name="some-name" />, state);
        expect(root).toMatchSnapshot();
    });
    it('should render the header fo rexagon correctly', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(
            <NodeAvatar shape="exagon" name="some-name" />,
            state
        );
        expect(root).toMatchSnapshot();
    });
    it('should render the type if it exists', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(
            <NodeAvatar {...{ name: 'some-name', type: 'some-type' }} />,
            state
        );
        const typeDiv = root.find('.type');
        expect(typeDiv.length).toBe(1);
    });
    it('should NOT render the type if DOES NOT exists', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(
            <NodeAvatar {...{ name: 'some-name', type: undefined }} />,
            state
        );
        const typeDiv = root.find('.type');
        expect(typeDiv.length).toBe(0);
    });
    it('should render the active state', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(
            <NodeAvatar
                className="node-avatar-test-container"
                {...{ name: 'some-name', type: undefined }}
            />,
            state
        );
        const container = root.find(DefaultContainer);
        container.simulate('mouseenter');
        root.update();
    });
});
