import { IconButton as IconButtonCore, IconButtonProps } from '@mui/material';
import { Container } from './styledComponents';
interface IProps extends IconButtonProps {
    shape?: 'square';
}

export const IconButton = (props: IProps) => {
    const { shape, ...iconButtonProps } = props;
    return (
        <Container className="icon-button" {...{ shape, disabled: iconButtonProps.disabled }}>
            <IconButtonCore {...iconButtonProps} />
        </Container>
    );
};

IconButton.displayName = 'IconButton';
