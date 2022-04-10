import styled, { css } from 'styled-components';

export const Container = styled.div<{ type: 'error' | 'warn' | 'success' }>`
    ${(props) => {
        const {
            theme: {
                dsl: { hexToRgba, styles, layout, palette },
            },
            type,
        } = props;
        const colorMap: {
            [type: string]: {
                color: string;
                backgroundColor: string;
            };
        } = {
            error: {
                color: palette.fonts.error,
                backgroundColor: hexToRgba(palette.secondary.orange[500], 10),
            },
            success: {
                color: palette.fonts.success,
                backgroundColor: hexToRgba(palette.secondary.green[500], 10),
            },
            warn: {
                color: palette.fonts.warn,
                backgroundColor: hexToRgba(palette.secondary.yellow[500], 10),
            },
        };
        return css`
            ${colorMap[type]}
            white-space: pre;
            padding: ${layout.padding.small};
            border-radius: ${styles.borderRadius};
            overflow-x: auto;
            .section {
                display: flex;
                .icon {
                    margin-right: ${layout.margin.small};
                }
            }
        `;
    }}
`;
