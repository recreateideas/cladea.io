import { Link } from 'react-router-dom';
import { ButtonProps } from '@mui/material';
import { StyledButton } from './styledComponents';

interface IProps extends ButtonProps {
    withLink?: string;
}

export const Button = (props: IProps) => {
    const { withLink, ...buttonProps } = props;
    const button = <StyledButton {...buttonProps} />;
    return withLink ? <Link to={withLink}>{button}</Link> : button;
};

Button.displayName = 'Button';
