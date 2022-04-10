import { ReactElement, useState, useEffect, forwardRef, Ref } from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { isEqual } from 'lodash';
import { Checkbox } from '../Checkbox';
import { Container } from './styledComponents';

type Value = string | number;
export type CheckedItems = Array<Value>;
type Item = {
    label: string | number | ReactElement;
    value: Value;
    checked?: boolean;
};
interface IProps {
    items: Array<Item>;
    secondaryAction?: ReactElement;
    onChange?: (checkedItems: CheckedItems) => any;
    controlled?: boolean;
    value?: CheckedItems;
    disableRipple?: boolean;
}
export const Checklist = forwardRef((props: IProps, ref: Ref<any>): ReactElement => {
    const {
        controlled = false,
        disableRipple = true,
        value: checkedProp,
        secondaryAction,
        items,
        onChange,
    } = props;
    const [checked, setChecked] = useState<CheckedItems>([]);

    const handleToggle = (value: Value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
        /* istanbul ignore else */
        if (onChange) {
            onChange(newChecked);
        }
    };
    useEffect(() => {
        if (controlled && checkedProp && !isEqual(checked, checkedProp)) {
            setChecked(checkedProp);
        }
    }, [controlled, checked, checkedProp]);
    return (
        <Container>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {items.map((item, i) => {
                    const { label, value } = item;
                    const labelId = `checkbox-list-label-${value}`;
                    return (
                        <ListItem key={i} secondaryAction={secondaryAction} disablePadding>
                            <ListItemButton onClick={handleToggle(value)} dense>
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        checked={checked.includes(value)}
                                        disableRipple={disableRipple}
                                        inputProps={{ 'aria-labelledby': labelId }}
                                    />
                                </ListItemIcon>
                                <ListItemText id={labelId} primary={label} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </Container>
    );
});

Checklist.displayName = 'Checklist';

Checklist.defaultProps = {};
