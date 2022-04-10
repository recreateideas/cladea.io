import { Accordion } from './Accordion';
import { Accordion as StyledAccordion } from './styledComponents';
import { TestProvider } from 'src/tests';

const { mountWithProviderAndTheme, shallow } = TestProvider();
describe('<Accordion/>', () => {
    it('should render', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(<Accordion />, state);
        expect(root).toMatchSnapshot();
    });
    it('should be closed by default', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(<Accordion />, state);
        const collapse = root.find('.accordion-details').at(0);
        expect(collapse.length).toBe(0);
    });
    it('should respect the defaultOpen prop', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(<Accordion defaultExpanded={true} />, state);
        const collapse = root.find('.accordion-details').at(0);
        expect(collapse.length).toBe(1);
    });
    it('should open on accordion change', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(<Accordion />, state);
        const accordion = root.find(StyledAccordion).at(0);
        accordion.props().onChange();
        root.update();
        const collapse = root.find('.accordion-details').at(0);
        expect(collapse.length).toBe(1);
        // expect(root).toMatchSnapshot();
    });
    it('should open when its controlled and expanded prop changes to true', () => {
        const root = shallow(
            <Accordion controlled={true}>
                <div className="children" />
            </Accordion>
        );
        let collapse = root.find('.children').at(0);
        root.setProps({ expanded: true });
        root.update();
        collapse = root.find('.children').at(0);
        expect(collapse.length).toBe(1);
    });
});
