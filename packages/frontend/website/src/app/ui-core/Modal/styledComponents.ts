import styled, { css } from 'styled-components';
import { Modal } from 'react-bootstrap';

const StyledModal = styled(Modal)`
    ${(props) => {
        const {
            theme: {
                dsl: { palette, layout },
            },
        } = props;
        return css`
            .modal-content {
                box-shadow: ${palette.neutrals.boxShadow()};
                border: solid 1px ${palette.neutrals.borders};
            }
            .modal-body {
                max-height: 500px;
                overflow: auto;
            }
            .modal-content,
            .modal-header,
            .modal-footer {
                background-color: ${palette.neutrals.primaryBg};
            }
            .modal-body,
            .modal-header,
            .modal-footer {
                border: none;
                padding: ${layout.padding.small};
            }
            .close {
                color: ${palette.fonts.primary};
            }
        `;
    }}
`;

export { StyledModal };
