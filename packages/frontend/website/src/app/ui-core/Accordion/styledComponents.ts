import styled, { css } from 'styled-components';
import {
    Accordion as MUIAccordion,
    AccordionDetails as MUIAccordionDetails,
    AccordionSummary as MUIAccordionSummary,
} from '@mui/material';

export const Container = styled.div``;
export const Accordion = styled(MUIAccordion)`
    ${(props) => {
        const {
            theme: {
                dsl: { palette },
            },
        } = props;
        return css`
            background-color: ${palette.neutrals.secondaryBg};
            box-shadow: none;
            background-image: none;
        `;
    }}
`;
export const AccordionDetails = styled(MUIAccordionDetails)`
    ${(props) => {
        const {
            theme: {
                dsl: {
                    layout: { padding },
                },
            },
        } = props;
        return css`
            padding: 0px ${padding.small} ${padding.small} ${padding.small};
        `;
    }}
`;
export const AccordionSummary = styled(MUIAccordionSummary)`
    ${(props) => {
        const {
            theme: {
                dsl: {
                    sizes,
                    layout: { padding },
                },
            },
        } = props;
        return css`
            &.Mui-expanded {
                min-height: ${sizes.accordion.medium};
            }
            > div {
                margin: ${padding.small} 0 !important;
            }
            padding: 0px ${padding.small};
        `;
    }}
`;
export const Title = styled.div``;
