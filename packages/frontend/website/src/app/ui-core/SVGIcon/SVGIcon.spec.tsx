import { SVGIcon } from './SVGIcon';
import { TestProvider } from 'src/tests';
import { Container, Dot } from './styledComponents';

const { mountWithProviderAndTheme } = TestProvider();
describe('<SVGIcon/>', () => {
    it('should render', () => {
        const root = mountWithProviderAndTheme(<SVGIcon {...{ name: 'lambda' }} />);
        expect(root).toMatchSnapshot();
    });

    it('should use the default name', () => {
        const root = mountWithProviderAndTheme(<SVGIcon />);
        const container = root.find('.svg-icon .alert');
        expect(container.length).toBe(1);
    });

    it('should use the size passed as prop', () => {
        const root = mountWithProviderAndTheme(<SVGIcon {...{ size: 'large' }} />);
        const icon = root.find('ForwardRef(SvgIcoAlert)');
        expect(icon.props()).toHaveProperty('width', window.theme.dsl.sizes.icons.large);
        expect(icon.props()).toHaveProperty('height', window.theme.dsl.sizes.icons.large);
    });

    it('should rotate the icon the same degrees are passed as prop', () => {
        const root = mountWithProviderAndTheme(<SVGIcon {...{ name: 'lambda', rotate: 45 }} />);
        const container = root.find(Container);
        expect(container).toHaveStyleRule('transform', 'rotate(45deg)');
    });

    it('should use the colorPath when colorPath is passed', () => {
        const root = mountWithProviderAndTheme(
            <SVGIcon {...{ name: 'lambda', colorPath: 'primary.ice[500]' }} />
        );
        const container = root.find(Container);
        expect(container.props()).toHaveProperty('fill', window.theme.dsl.palette.primary.ice[500]);
    });

    it('should preserve the color when preserveColor is passed', () => {
        const root = mountWithProviderAndTheme(
            <SVGIcon {...{ name: 'lambda', preserveColor: true }} />
        );
        const container = root.find(Container);
        expect(container.props()).toHaveProperty('fill', undefined);
    });

    it('should set the backgroundFill', () => {
        const root = mountWithProviderAndTheme(
            <SVGIcon {...{ name: 'lambda', fillBackgroundColor: '#abcdef' }} />
        );
        const container = root.find(Container);
        expect(container.props()).toHaveProperty('backgroundFill', '#abcdef');
    });

    it('should set the backgroundFill using backgroundFillPath', () => {
        const root = mountWithProviderAndTheme(
            <SVGIcon {...{ name: 'lambda', fillBackgroundPath: 'primary.ice[500]' }} />
        );
        const container = root.find(Container);
        expect(container.props()).toHaveProperty(
            'backgroundFill',
            window.theme.dsl.palette.primary.ice[500]
        );
    });

    it('should display the dot with the activity color', () => {
        const root = mountWithProviderAndTheme(
            <SVGIcon {...{ name: 'lambda', dotColorCode: 'activity' }} />
        );
        const dot = root.find(Dot);
        expect(dot.length).toBe(1);
        expect(dot.props()).toHaveProperty('colorCode', 'activity');
    });

    it('should display the dot with the error color', () => {
        const root = mountWithProviderAndTheme(
            <SVGIcon {...{ name: 'lambda', dotColorCode: 'error' }} />
        );
        const dot = root.find(Dot);
        expect(dot.length).toBe(1);
        expect(dot.props()).toHaveProperty('colorCode', 'error');
    });
});
