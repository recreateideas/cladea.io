import styled, { css } from 'styled-components';

interface IExagon {
    inner?: boolean;
    backgroundColor: string;
    width: number;
    height: number;
    border: number;
}

const exagon = ({ inner, width, height, border, backgroundColor }: IExagon) => {
    return css`
        ${inner &&
        css`
            left: 1px;
            z-index: 1;
        `}
        position: relative;
        height: ${height}px;
        width: ${width}px;
        background-color: ${backgroundColor};
        margin: ${height / 2}px 0;
        &:before,
        &:after {
            content: '';
            position: absolute;
            width: 0;
            border-left: ${width / 2}px solid transparent;
            border-right: ${width / 2}px solid transparent;
        }
        &:before {
            bottom: 100%;
            border-bottom: ${border}px solid ${backgroundColor};
        }
        &:after {
            top: 100%;
            width: 0;
            border-top: ${border}px solid ${backgroundColor};
        }
    `;
};

export const Container = styled.div<{ size?: 'small' | 'medium'; inner?: boolean }>`
    ${(props) => {
        const {
            theme: {
                dsl: {
                    palette,
                    // layout,
                },
            },
            inner,
            size = 'medium',
        } = props;
        const sizes = {
            small: 62,
            medium: 102,
        };
        const length = sizes[size];
        const whRatio = 1.732;
        const width = inner ? length - 2 : length;
        const height = inner ? width / whRatio + 1 : width / whRatio;
        const border = inner ? height / 2 - 1 : height / 2;
        const backgroundColor = inner ? palette.neutrals.secondaryBg : palette.neutrals.borders;
        return css`
            ${exagon({ inner, width, height, border, backgroundColor })}
            .content {
                position: relative;
                top: -1px;
                .icon {
                    display: flex;
                    justify-content: center;
                }
                .header {
                    flex-direction: column;
                    text-align: center;
                }
                .react-flow__handle-bottom {
                    top: ${height +
                    border -
                    2 +
                    1}px; // 1px because content is pushed up 1px in line 69
                    z-index: 2;
                }
            }
        `;
    }}
`;
