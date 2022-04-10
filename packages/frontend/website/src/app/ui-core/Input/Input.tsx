import { ReactElement, forwardRef, Ref } from 'react';
import { TextField, StandardTextFieldProps } from '@mui/material';
import { Container } from './styledComponents';
import { CustomCss } from '@types';

interface IProps extends StandardTextFieldProps {
    customCss?: CustomCss;
}

export const Input = forwardRef((props: IProps, ref: Ref<any>): ReactElement => {
    const { customCss, variant = 'standard', ...inputProps } = props;
    return (
        <Container className="input-container" {...{ customCss }}>
            <TextField ref={ref} {...inputProps} variant={variant} />
        </Container>
    );
});

Input.displayName = 'Input';
