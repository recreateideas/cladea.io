import { Select } from './Select';
import { TestProvider } from 'src/tests';

const { mountWithProviderAndTheme } = TestProvider();
describe('<Select/>', () => {
    it('should render', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(<Select value="" options={[]} />, state);
        expect(root).toMatchSnapshot();
    });

    it('should render all the options', () => {
        const state = {
            common: {},
        };
        const root = mountWithProviderAndTheme(
            <Select
                value="chocolate"
                options={[
                    { value: 'chocolate', label: 'Chocolate' },
                    { value: 'strawberry', label: 'Strawberry' },
                    { value: 'vanilla', label: 'Vanilla' },
                ]}
            />,
            state
        );
        expect(root).toMatchSnapshot();
    });
});
