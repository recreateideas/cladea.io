import { useTheme } from 'styled-components';
import { ReactElement } from 'react';
import { CircularProgress, CircularProgressProps } from '@mui/material/';
import { Box } from '@mui/material';
import { Container } from './styledComponents';
import { get } from 'lodash';

interface IProps extends Omit<CircularProgressProps, 'color'> {
    withRail?: boolean;
    color?: string;
    error?: boolean;
    speed?: 'slow' | 'normal' | 'fast' | 'superFast';
}
export const Spinner = (props: IProps): ReactElement => {
    const {
        withRail = true,
        color: colorPath = 'secondary.yellow[900]',
        speed,
        disableShrink,
        error,
        ...progressProps
    } = props;
    const {
        //@ts-ignore
        dsl: { palette },
    } = useTheme();
    const color = get(palette, colorPath);
    return (
        <Container className="spinner" {...{ speed }}>
            <Box sx={{ display: 'flex' }}>
                {withRail && !error && (
                    <CircularProgress
                        sx={{
                            position: 'absolute',
                            color: () => palette.tertiary.grey[400],
                        }}
                        {...progressProps}
                        variant="determinate"
                        value={100}
                    />
                )}
                {error ? (
                    <CircularProgress
                        sx={{
                            color: () => palette.secondary.red[900],
                        }}
                        {...progressProps}
                        variant="determinate"
                        value={100}
                    />
                ) : (
                    <CircularProgress
                        {...progressProps}
                        disableShrink={disableShrink}
                        sx={{ color: () => color }}
                    />
                )}
            </Box>
        </Container>
    );
};

Spinner.displayName = 'Spinner';
