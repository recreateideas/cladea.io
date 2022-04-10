import { useState, ReactElement } from 'react';
import { SVGIcon } from '../../ui-core';
import { DefaultContainer, Header, HeaderText, Body } from './styledComponents';
import { shapes } from './shapes';
import { CoreNodeProps } from '@types';

export const NodeAvatar = (props: CoreNodeProps): ReactElement => {
    const {
        size = 'small',
        customCss,
        label,
        type,
        icon,
        className,
        shape,
        actions,
        children,
    } = props;
    const [isActive, setIsActive] = useState<boolean>(false);
    const onMouseEnter = () => {
        setIsActive(true);
    };
    const onMouseLeave = () => {
        setIsActive(false);
    };
    const Container = shape ? shapes[shape] : DefaultContainer;
    const flexDirection = shape === 'exagon' ? 'as-column' : 'as-row';
    return (
        <Container
            className={className}
            {...{ onMouseEnter, onMouseLeave, customCss, isActive, size }}
        >
            <div className="content">
                <Header className="header">
                    <div className={`left ${flexDirection}`}>
                        <div className="icon">
                            <SVGIcon {...{ name: icon, preserveColor: true }} />
                        </div>
                        <HeaderText className="header-text" {...{ size }}>
                            <div className="name">{label}</div>
                            {type && <div className="type">{type}</div>}
                        </HeaderText>
                    </div>
                    {actions && <div className="node-actions">{actions}</div>}
                </Header>
                <Body>{children}</Body>
            </div>
        </Container>
    );
};

NodeAvatar.displayName = 'NodeAvatar';

NodeAvatar.defaultProps = {};
