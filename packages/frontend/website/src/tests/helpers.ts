interface IMakeNode {
    id?: number | string;
    type?: string;
    data?: any;
}
export const makeNode = ({ id, type, data }: IMakeNode = {}) => {
    const idd = id || 1;
    return {
        id: idd,
        type,
        position: {
            x: 101,
            y: 202,
        },
        data: data || {
            name: `name-for-${idd}`,
            value: `value-for-${idd}`,
            handlers: [
                {
                    name: 'some-handler-1',
                    label: 'some-handler-label-1',
                },
            ],
        },
    };
};

interface IMakeNode {
    id?: number | string;
    source?: number | string;
    target?: number | string;
    sourceHandle?: number | string;
    targetHandle?: number | string;
    data?: any;
}
export const makeEdge = ({
    id,
    source,
    target,
    sourceHandle,
    targetHandle,
    data,
}: IMakeNode = {}) => {
    const idd = id || 1;
    return {
        id: idd,
        source: source || `source-${101}`,
        target: target || `target-${202}`,
        sourceHandle: sourceHandle || `source-handle@${source || 101}`,
        targetHandle: targetHandle || `target-handle@${target || 202}`,
        data: data || {
            'some-data-for': idd,
        },
    };
};
