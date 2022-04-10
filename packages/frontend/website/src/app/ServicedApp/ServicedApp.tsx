import { ReactElement } from 'react';
import { useHealthCheck, useServicePorts } from '../../hooks';
import { useTheme } from 'styled-components';
import { Loader } from '../ui-core';
import { App } from '../App';
import { Theme } from '@types';

export const ServicedApp = (): ReactElement => {
    const servicePorts = useServicePorts();
    const isHealthy = useHealthCheck({ servicePorts });
    const isChecking = isHealthy === undefined;
    const theme = useTheme() as Theme;
    return (
        <div id="app">
            {isHealthy ? (
                <App />
            ) : !servicePorts ? (
                <Loader
                    {...{
                        className: 'setting-up',
                        color: theme.dsl.palette.fonts.success,
                        message: 'setting up services...',
                    }}
                />
            ) : isChecking ? (
                <Loader
                    {...{
                        className: 'checking',
                        color: theme.dsl.palette.brand.primary[500],
                        message: 'checking services...',
                    }}
                />
            ) : (
                <Loader
                    {...{
                        className: 'not-responding',
                        color: theme.dsl.palette.fonts.error,
                        freeze: true,
                        message: 'Services are not responding. Cmd + R to retry.',
                    }}
                />
            )}
        </div>
    );
};
