import { css } from 'styled-components';

const muiCss = css`
    ${(props) => {
        const {
            theme: {
                dsl: { palette, styles },
            },
        } = props;
        return css`
            .MuiPaper-root {
                background-color: ${palette.neutrals.secondaryBg};
            }
            .MuiDrawer-paper {
                background-color: ${palette.neutrals.primaryBg};
            }
            .MuiIconButton-label {
                color: ${palette.fonts.primary};
            }
            .MuiFormControl-root {
                border-color: ${palette.fonts.primary};
            }
            .MuiOutlinedInput-root {
                border: solid 1px ${palette.neutrals.borders};
                border-radius: ${styles.borderRadius};
            }
            .MuiInputLabel-formControl {
                background-color: ${palette.neutrals.primaryBg};
                padding: 0 6px;
            }
            .MuiButton-root {
                color: ${palette.fonts.primaryInverted};
            }
        `;
    }}
`;

export default muiCss;
