import { Sidebar } from './Sidebar';
import { TestProvider } from 'src/tests';
import { ChevronRight, ChevronLeft, Menu, Add } from '@mui/icons-material';
import { Container, Content, Handle } from './styledComponents';

const { mountWithProviderAndTheme } = TestProvider();
describe('<Sidebar/>', () => {
    it('should render', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(
            <Sidebar>
                <div>some content</div>
            </Sidebar>,
            state
        );
        expect(root).toMatchSnapshot();
    });
    it('should render any children', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(
            <Sidebar>
                <div className="children">some content</div>
            </Sidebar>,
            state
        );
        const children = root.find('.children');
        expect(children.length).toBe(1);
    });
    it('should render the overlay type if passed as prop', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(
            <Sidebar type="overlay">
                <div className="children">some content</div>
            </Sidebar>,
            state
        );
        const container = root.find(Container);
        expect(container.props().type).toBe('overlay');
    });
    it('should open and close the sidebar when clicking on the handle', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(
            <Sidebar>
                <div className="children">some content</div>
            </Sidebar>,
            state
        );
        let content;
        let icon;
        const handle = root.find(Handle);
        handle.simulate('click');
        content = root.find(Content);
        // is open
        expect(content).toHaveStyleRule('width', '200px');
        icon = root.find(ChevronRight);
        expect(icon.length).toBe(1);
        handle.simulate('click');
        // is closed
        content = root.find(Content);
        icon = root.find(ChevronLeft);
        expect(content).toHaveStyleRule('width', '0px');
        expect(icon.length).toBe(1);
    });
    it('should use the icons passed as props', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(
            <Sidebar openIcon={<Menu />} closeIcon={<Add />}>
                <div className="children">some content</div>
            </Sidebar>,
            state
        );
        let content;
        let icon;
        const handle = root.find(Handle);
        handle.simulate('click');
        content = root.find(Content);
        // is open
        expect(content).toHaveStyleRule('width', '200px');
        icon = root.find(Add);
        expect(icon.length).toBe(1);
        handle.simulate('click');
        // is closed
        content = root.find(Content);
        icon = root.find(Menu);
        expect(content).toHaveStyleRule('width', '0px');
        expect(icon.length).toBe(1);
    });
    it('should align the sidebar to the right if from=right', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(
            <Sidebar from="right">
                <div className="children">some content</div>
            </Sidebar>,
            state
        );
        let content;
        const handle = root.find(Handle);
        handle.simulate('click');
        content = root.find(Container);
        expect(content).toHaveStyleRule('right', '0px');
    });
    it('should align the sidebar to the left if from=left', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(
            <Sidebar from="left">
                <div className="children">some content</div>
            </Sidebar>,
            state
        );
        let content;
        const handle = root.find(Handle);
        handle.simulate('click');
        content = root.find(Container);
        expect(content).toHaveStyleRule('left', '0px');
    });
    it('should use the width passed as props', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(
            <Sidebar width={111}>
                <div className="children">some content</div>
            </Sidebar>,
            state
        );
        let content;
        const handle = root.find(Handle);
        handle.simulate('click');
        content = root.find(Content);
        // is open
        expect(content).toHaveStyleRule('width', '111px');
    });
});
