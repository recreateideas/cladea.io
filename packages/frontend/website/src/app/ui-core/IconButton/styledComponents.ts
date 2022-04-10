import styled, { css } from 'styled-components';

export const Container = styled.div<{ shape?: 'square'; disabled?: boolean }>`
    ${(props) => {
        const {
            theme: {
                dsl: { palette, styles },
            },
            disabled,
            shape,
        } = props;
        const bordersRadius = shape === 'square' ? styles.borderRadius : undefined;
        return css`
            ${bordersRadius &&
            css`
                .MuiButtonBase-root {
                    border-radius: ${bordersRadius};
                }
            `}
            ${disabled &&
            css`
                &,
                * {
                    cursor: no-drop;
                    svg {
                        fill: ${palette.neutrals.inactive} !important;
                    }
                }
            `}
        `;
    }}
`;
