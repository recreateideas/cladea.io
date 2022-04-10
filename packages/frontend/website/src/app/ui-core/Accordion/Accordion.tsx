import { ReactElement, useState, useEffect } from 'react';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import {
    Container,
    Accordion as StyledAccordion,
    AccordionSummary,
    Title,
    AccordionDetails,
} from './styledComponents';

interface IProps {
    onChange?: (...args: any) => void;
    expanded?: boolean;
    controlled?: boolean;
    children?: ReactElement | Array<ReactElement>;
    title?: ReactElement | string;
    className?: string;
    expandIcon?: ReactElement;
    defaultExpanded?: boolean;
}
export const Accordion = (props: IProps): ReactElement => {
    const {
        children,
        controlled = false,
        expanded = false,
        title,
        className = '',
        expandIcon = <ExpandMoreIcon />,
        defaultExpanded = false,
    } = props;
    const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);

    const onChange = () => {
        setIsExpanded((exp) => !exp);
    };
    useEffect(() => {
        if (controlled && isExpanded !== expanded) {
            setIsExpanded(!!expanded);
        }
    }, [controlled, isExpanded, expanded]);
    return (
        <Container className={`${className}`}>
            <StyledAccordion
                {...{
                    TransitionProps: { unmountOnExit: true },
                    expanded: isExpanded,
                    onChange,
                }}
            >
                <AccordionSummary
                    className="accordion-summary"
                    {...{
                        expandIcon,
                    }}
                >
                    <Title>{title}</Title>
                </AccordionSummary>
                <AccordionDetails className="accordion-details">{children}</AccordionDetails>
            </StyledAccordion>
        </Container>
    );
};

Accordion.displayName = 'Accordion';

Accordion.defaultProps = {};
