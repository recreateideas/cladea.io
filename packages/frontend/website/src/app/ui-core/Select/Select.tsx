import { ReactElement, forwardRef, Ref } from 'react';
import { TextField, StandardTextFieldProps, MenuItem } from '@mui/material';
import { Container } from './styledComponents';

interface IProps extends StandardTextFieldProps {
    options: Array<{
        value: string | number;
        label: string;
    }>;
}
export const Select = forwardRef((props: IProps, ref: Ref<any>): ReactElement => {
    const { options, variant = 'standard', ...textFieldProps } = props;
    return (
        <Container className="select-container">
            <TextField ref={ref} select {...{ ...textFieldProps, variant }}>
                {options.map(({ value: optionValue, label: optionLabel }, index) => (
                    <MenuItem key={index} value={optionValue}>
                        {optionLabel}
                    </MenuItem>
                ))}
            </TextField>
        </Container>
    );
});

Select.displayName = 'Select';

Select.defaultProps = {};
