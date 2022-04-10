import { get as getPath } from 'lodash';
import { FieldErrors } from 'react-hook-form';

export const getFormError = (field: string, errors: FieldErrors) => {
    const error = getPath(errors || {}, field);
    return {
        error: !!error,
        helperText: error?.message,
    };
};
