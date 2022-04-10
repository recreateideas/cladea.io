import { Checklist } from './Checklist';
import { Checkbox } from '../Checkbox';
import { ListItemButton } from '@mui/material';
import { TestProvider } from 'src/tests';

const { shallow, mount } = TestProvider();
describe('<Checklist/>', () => {
    const items = [
        {
            value: 1,
            label: <div className="some-test-item">'some label'</div>,
        },
        {
            value: 2,
            label: <div className="some-test-item">'some other label'</div>,
        },
    ];
    it('should render', () => {
        const root = shallow(<Checklist items={items} />);
        expect(root).toMatchSnapshot();
    });
    it('should render the correct number of checkboxes', () => {
        const root = shallow(<Checklist items={items} />);
        const checkboxs = root.find(Checkbox);
        expect(checkboxs.length).toBe(2);
    });
    it("should check the checkbox when the prop is passed and it's controlled", () => {
        const root = mount(<Checklist items={items} value={undefined} controlled={true} />);
        root.setProps({ value: [1] });
        root.update();
        const checkbox = root.find(Checkbox).at(0);
        expect(checkbox.props().checked).toBe(true);
    });
    it('should call the onChange when clicked method if supplied, adding the toggled value', () => {
        const changeSpy = jest.fn();
        const root = mount(<Checklist items={items} controlled={true} onChange={changeSpy} />);
        const checkboxButton = root.find(ListItemButton).at(0);
        checkboxButton.simulate('click');
        root.update();
        expect(changeSpy).toHaveBeenCalledWith([1]);
    });
    it('should call the onChange when clicked method if supplied, removing the toggled value', () => {
        const changeSpy = jest.fn();
        const root = mount(
            <Checklist items={items} value={[1]} controlled={true} onChange={changeSpy} />
        );
        const checkboxButton = root.find(ListItemButton).at(0);
        checkboxButton.simulate('click');
        root.update();
        expect(changeSpy).toHaveBeenCalledWith([]);
    });
    it('should call the onChange when clicked method if suppliedddd', () => {
        const changeSpy = jest.fn();
        const root = mount(<Checklist items={items} controlled={true} onChange={changeSpy} />);
        const checkboxButton = root.find(ListItemButton).at(0);
        checkboxButton.simulate('click');
        root.update();
        const checkbox = root.find(Checkbox).at(0);
        expect(checkbox.props().checked).toBe(true);
    });
});
