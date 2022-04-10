import { WindowHeader } from './WindowHeader';
import { TestProvider } from 'src/tests';

const { shallow } = TestProvider({});

afterEach(() => {
    jest.resetAllMocks();
});
describe('<WindowHeader/>', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    it('should render', () => {
        const root = shallow(<WindowHeader />);
        expect(root).toMatchSnapshot();
    });

    it('have the three buttons', () => {
        const root = shallow(<WindowHeader />);
        const closeBtn = root.find('.close-btn').at(0);
        const minBtn = root.find('.min-btn').at(0);
        const maxBtn = root.find('.max-btn').at(0);
        expect(closeBtn).toBeTruthy();
        expect(minBtn).toBeTruthy();
        expect(maxBtn).toBeTruthy();
    });

    it('close function is invoked', () => {
        const root = shallow(<WindowHeader />);
        const closeBtn = root.find('.close-btn').at(0);
        closeBtn.simulate('click');
        expect(consoleSpy).toHaveBeenCalledWith('close-window');
    });
    it('min function is invoked', () => {
        const root = shallow(<WindowHeader />);
        const closeBtn = root.find('.min-btn').at(0);
        closeBtn.simulate('click');
        expect(consoleSpy).toHaveBeenCalledWith('minimize-window');
    });
    it('max function is invoked', () => {
        const root = shallow(<WindowHeader />);
        const closeBtn = root.find('.max-btn').at(0);
        closeBtn.simulate('click');
        expect(consoleSpy).toHaveBeenCalledWith('maximise-window');
    });
});
