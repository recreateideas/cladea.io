import { Checkbox } from './Checkbox';
import { Checkbox as CheckboxCore } from '@mui/material';
import { TestProvider } from 'src/tests';

const { mountWithProviderAndTheme } = TestProvider();
describe('<Checkbox/>', () => {
    it('should render', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(<Checkbox />, state);
        expect(root).toMatchSnapshot();
    });
    it('should render with the label', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(<Checkbox label="some-label" />, state);
        expect(root).toMatchSnapshot();
    });
    it('should be checked if checked prop is true', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(<Checkbox checked />, state);
        const checkbox = root.find(CheckboxCore).at(0);
        expect(checkbox.props().checked).toBe(true);
    });
    it('should be checked if value prop is true', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(<Checkbox value />, state);
        const checkbox = root.find(CheckboxCore).at(0);
        expect(checkbox.props().checked).toBe(true);
    });
});
