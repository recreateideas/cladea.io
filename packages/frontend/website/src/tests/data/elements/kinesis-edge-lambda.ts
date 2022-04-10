import { EditorElements } from '@types';

export const kinesisEdgeLambdaOne: EditorElements = [
    {
        id: 'node@T_TPr7d1OtO3HNDNlwysZ',
        type: 'kinesisStream',
        position: { x: 45, y: 240 },
        data: {
            value: 'stream-name',
            id: 'node@T_TPr7d1OtO3HNDNlwysZ',
            label: 'Some Kinesis Stream',
            environment: '{\n\n}',
            type: 'kinesisStream',
            family: 'communications',
        },
    },
    {
        id: 'node@3IvfNKie5dia4ojvdSE4J',
        type: 'lambda',
        position: { x: 435, y: 285 },
        data: {
            id: 'node@3IvfNKie5dia4ojvdSE4J',
            label: 'Some Lambda',
            path: '/User/clacla/lambdas/some-lambda',
            handlers: [
                {
                    id: 'handler-D-vjGigrBGa-yDJmb1fY3',
                    name: 'Handler 1',
                    handler: 'handlers/one.handler',
                    events: '',
                },
                {
                    id: 'handler-bKliEwqkKawv0_TTftMd0',
                    name: 'Handler 2',
                    handler: 'handlers/two.handler',
                    events: [],
                },
            ],
            environment: '{\n"VAR_ONE": "value one"\n}',
            type: 'lambda',
            family: 'services',
        },
    },
    {
        id: 'reactflow__edge-node@T_TPr7d1OtO3HNDNlwysZsource-node@T_TPr7d1OtO3HNDNlwysZ-node@3IvfNKie5dia4ojvdSE4Jtarget@handler-D-vjGigrBGa-yDJmb1fY3',
        source: 'node@T_TPr7d1OtO3HNDNlwysZ',
        target: 'node@3IvfNKie5dia4ojvdSE4J',
        type: 'default',
        sourceHandle: 'source-node@T_TPr7d1OtO3HNDNlwysZ',
        targetHandle: 'target@handler-D-vjGigrBGa-yDJmb1fY3',
        animated: true,
        label: 'XXX',
        labelBgPadding: [4, 2],
        data: { label: 'XXX' },
    },
];
