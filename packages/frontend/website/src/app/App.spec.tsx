import { App } from './App';
import { TestProvider } from 'src/tests';

const { fullShallow } = TestProvider();
describe('<App/>', () => {
    it('should render', () => {
        const root = fullShallow(<App />);
        expect(root).toMatchSnapshot();
    });
});
