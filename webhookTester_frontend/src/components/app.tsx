import { ComponentChild, FunctionalComponent, h, VNode } from 'preact';
import { Stack, IStackTokens } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import data from '../testData.js';

import Utils from '../../frontendUtils/frontendUtils';

import { Login } from '@microsoft/mgt-react';

interface webhookProps {
    EventName: string;
    ScenarioId: string;
    CallStartDateTime: string;
    RemotePartyName: string;
    RemotePartyUri: string;
    RemotePartyNumber: string;
    RemotePartyId: string;
    QueueDisplayName: string;
    CallsInQueue: number;
    NumberOfAvailableAgents: number;
    CallEndDateTime: string;
    CallLength: string;
    AgentUPN: string;
    TalkTime: string;
    WaitTime: string;
    CallbackRequested: boolean;
    TimedOut: boolean;
    Abandoned: boolean;
    ServiceLevelAchieved: boolean;
}

const App: FunctionalComponent = () => {

    Utils.foo();
    console.log( process.env.NODE_ENV );

    return (
        <div>
            <div>
                <header>
                    <Login />
                </header>
            </div>
            <div id="preact_root">
                <h1>Test</h1>
                <h2>Test</h2>
                <h3>Test</h3>
                <p>Test</p>
                <ul>
                    {data.map( ( item: { name: any } ) => <li>{item.name}</li> )}
                </ul>
            </div>
            <div style={{ maxWidth: "250px" }}>
                <Stack>
                    <DefaultButton text="Standard" />
                    <PrimaryButton text="Primary" />
                </Stack>
            </div>
        </div>
    );
};

export default App;