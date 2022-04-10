import { ReactElement } from 'react';
import { ThemedStyledProps } from 'styled-components';
import { Container } from './styledComponents';

interface IExagonProps {
    size?: 'small' | 'medium';
    isActive?: boolean;
    customCss?: ThemedStyledProps<any, any>;
    onMouseEnter?: any;
    onMouseLeave?: any;
    children?: ReactElement | Array<ReactElement>;
}
export const Exagon = (props: IExagonProps): ReactElement => {
    const { size = 'medium', customCss, isActive, onMouseEnter, onMouseLeave, children } = props;
    return (
        <Container
            className="exagon"
            {...{ onMouseEnter, onMouseLeave, customCss, isActive, size }}
        >
            <Container className="exagon inner" {...{ inner: true, size }}>
                {children}
            </Container>
        </Container>
    );
};

Exagon.displayName = 'Exagon';
