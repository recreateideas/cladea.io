import styled, { css } from 'styled-components';

export const Container = styled.div<{
    speed?: 'slow' | 'normal' | 'fast' | 'superFast';
}>`
    ${(props) => {
        const {
            theme: {
                dsl: { styles },
            },
            speed = 'fast',
        } = props;
        const animationSpeed = styles.animationSpeed[speed];
        return css`
            span {
                animation-duration: ${animationSpeed};
            }
        `;
    }}
`;
