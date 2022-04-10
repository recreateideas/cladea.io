import { ReactNode, ReactElement } from 'react';
import { Error, Cancel, CheckCircle } from '@mui/icons-material';
import { Container } from './styledComponents';

interface IProps {
    icon?: ReactNode;
    message: string;
    iconSize?: 'medium' | 'small' | 'inherit' | 'large' | undefined;
    type?: 'error' | 'warn' | 'success';
    details?: ReactNode | string;
}
export const HeroMessage = (props: IProps): ReactElement => {
    const { type = 'error', icon, message, iconSize = 'large', details } = props;
    const iconMap = {
        error: Cancel,
        warn: Error,
        success: CheckCircle,
    };
    const Icon = iconMap[type];
    return (
        <Container className={`hero-message ${type}`} type={type}>
            <div className="section">
                <div className="icon">{icon || <Icon fontSize={iconSize} />}</div>
                <div className="message">{message}</div>
            </div>
            {details && <div className="details">{details}</div>}
        </Container>
    );
};

HeroMessage.displayName = 'HeroMessage';
