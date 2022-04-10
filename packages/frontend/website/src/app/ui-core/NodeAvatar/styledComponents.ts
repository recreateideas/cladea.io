import styled, { css, ThemedStyledProps } from 'styled-components';

interface IContainer {
    size?: 'small' | 'medium';
    isActive?: boolean;
    customCss?: ThemedStyledProps<any, any>;
}

export const DefaultContainer = styled.div<IContainer>`
    box-sizing: border-box;
    ${(props) => {
        const {
            theme: {
                dsl: { palette, styles },
            },
            isActive,
            size = 'small',
            customCss,
        } = props;
        const sizeMap: {
            [key: string]: {
                height: number | string;
                width: number | string;
            };
        } = {
            small: {
                width: '100%',
                height: 32,
            },
            medium: {
                width: 256,
                height: 56,
            },
        };
        return css`
            ${isActive &&
            css`
                background-color: ${palette.neutrals.tertiaryBg} !important;
            `}
            background-color: ${palette.neutrals.secondaryBg};
            border: solid 1px ${palette.neutrals.borders};
            border-radius: ${styles.borderRadius};
            ${sizeMap[size]}
            ${customCss}
        `;
    }}
`;

export const Header = styled.div`
    display: flex;
    ${(props) => {
        const {
            theme: {
                dsl: {
                    layout: { padding },
                },
            },
        } = props;
        return css`
            .left {
                display: flex;
                &.as-column {
                    flex-direction: column;
                }
            }
            padding: ${padding.xsmall};
            display: flex;
            justify-content: space-between;
        `;
    }}
`;

export const HeaderText = styled.div<{ size?: 'small' | 'medium' }>`
    display: flex;
    flex-direction: column;
    ${(props) => {
        const {
            theme: {
                dsl: {
                    typography: { typefaces },
                    layout: { padding },
                },
            },
            size = 'small',
        } = props;
        const sizes = {
            small: 'caption',
            medium: 'p',
        };
        const nameSize = sizes[size];
        return css`
            padding-left: ${padding.xsmall};
            .name {
                ${typefaces[nameSize]({ color: 'primary' })}
            }
            .type {
                ${typefaces.caption()}
            }
        `;
    }}
`;

export const Body = styled.div``;
