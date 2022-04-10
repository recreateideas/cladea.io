import { WindowHeader } from './WindowHeader';
import { TestProvider } from 'src/tests';

const { shallow } = TestProvider({});

describe('<WindowHeader/>', () => {
    it('should render', () => {
        const root = shallow(<WindowHeader />);
        expect(root).toMatchSnapshot();
    });
});
