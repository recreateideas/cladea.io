import styled, { css } from 'styled-components';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)`
    ${(props) => {
        const {
            theme: {
                dsl: { palette },
            },
        } = props;
        return css`
            &.MuiButton-containedPrimary .MuiButton-label {
                color: ${palette.fonts.primaryInverted};
            }
        `;
    }}
`;
