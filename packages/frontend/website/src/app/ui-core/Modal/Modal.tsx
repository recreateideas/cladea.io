import React from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';
import { ReactNode } from 'react-transition-group/node_modules/@types/react';
import { StyledModal } from './styledComponents';

interface Iprops {
    show?: boolean;
    onClose?: (...args: any) => any;
    content?: {
        header: {
            title?: string | ReactNode;
        };
        Body?: ReactNode;
        Footer?: ReactNode;
    };
    centered?: boolean;
}
export const Modal = React.memo((props: Iprops) => {
    const { show, onClose, content, centered = true } = props;
    const { header: { title = '' } = {}, Body, Footer } = content || {};
    return (
        <StyledModal {...{ show, onHide: onClose, centered }}>
            <BootstrapModal.Header>
                <BootstrapModal.Title>{title}</BootstrapModal.Title>
            </BootstrapModal.Header>
            {Body && <BootstrapModal.Body>{Body}</BootstrapModal.Body>}
            {Footer && <BootstrapModal.Footer>{Footer}</BootstrapModal.Footer>}
        </StyledModal>
    );
});

Modal.displayName = 'Modal';
