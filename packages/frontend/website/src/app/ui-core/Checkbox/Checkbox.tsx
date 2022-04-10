import { forwardRef, ReactElement, Ref } from 'react';
import { FormControlLabel, Checkbox as CheckboxCore, CheckboxProps } from '@mui/material';
import { Container } from './styledComponents';

interface IProps extends CheckboxProps {
    label?: string | ReactElement;
}
export const Checkbox = forwardRef((props: IProps, ref: Ref<any>): ReactElement => {
    const { label, checked, value } = props;
    const isChecked = !!checked || !!value;
    const Input = <CheckboxCore ref={ref} checked={isChecked} {...props} />;
    return (
        <Container>{label ? <FormControlLabel label={label} control={Input} /> : Input}</Container>
    );
});

Checkbox.displayName = 'Checkbox';

Checkbox.defaultProps = {};
