import styled, { css, FlattenInterpolation } from 'styled-components';

interface StylesMap {
    [type: string]: FlattenInterpolation<any>;
}

export const Container = styled.div<{ type: 'overlay'; from?: 'left' | 'right' }>`
    height: 100%;
    width: auto;
    display: flex;
    ${(props) => {
        const {
            type,
            from = 'left',
            theme: {
                dsl: {
                    layout: { namedZIndex },
                },
            },
        } = props;
        const flexDirection = from === 'left' ? 'row' : 'row-reverse';
        const styles: StylesMap = {
            overlay: css`
                position: absolute;
                z-index: ${namedZIndex.nodesSidebar};
                ${from}: 0px;
                flex-direction: ${flexDirection};
            `,
        };
        return css`
            ${styles[type]}
        `;
    }}
`;

export const Content = styled.div<{ isOpen: boolean; width?: number; from?: 'left' | 'right' }>`
    ${(props) => {
        const {
            isOpen,
            width = 200,
            from = 'left',
            theme: {
                dsl: {
                    palette: {
                        neutrals: { borders, secondaryBg, boxShadow },
                    },
                },
            },
        } = props;
        const borderSide = from === 'left' ? 'right' : 'left';
        const styles: StylesMap = {
            true: css`
                width: ${width}px;
                border-${borderSide}: solid 1px ${borders};
                box-shadow: ${boxShadow()};
            `,
            false: css`
                width: 0px;
                overflow: hidden;
            `,
        };
        return css`
            height: 100%;
            background-color: ${secondaryBg};
            transition: width 0.2s ease-in-out;
            ${styles[`${isOpen}`]}
        `;
    }}
`;

export const Handle = styled.div`
    position: relative;
    height: fit-content;
    border-radius: 100%;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    ${(props) => {
        const {
            theme: {
                dsl: { layout },
            },
        } = props;
        return css`
            top: ${layout.margin.xsmall};
        `;
    }}
`;
