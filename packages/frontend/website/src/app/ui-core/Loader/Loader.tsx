import Spinner from 'react-spinner-material';
import { Container, Message } from './styledComponents';

interface Iprops {
    color: string;
    freeze?: boolean;
    message?: string;
    className?: string;
}
export const Loader = (props: Iprops) => {
    const { className, color, freeze, message } = props;
    return (
        <Container className={`loader ${className}`} {...{ freeze }}>
            <Spinner {...{ radius: 40, color, stroke: 3, visible: true }} />
            {message && <Message>{message}</Message>}
        </Container>
    );
};

Loader.displayName = 'Loader';

Loader.defaultProps = {
    color: 'orange',
};
