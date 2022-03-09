import { ComponentChild, FunctionalComponent, h, VNode, Fragment } from 'preact';
import { Stack, IStackTokens } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { actualWebhookData } from '../testData.js';
import { newQueueCall } from './webhhookEventItems/newQueueCallItem';
import { abandonedCall } from './webhhookEventItems/abandonedCallItem';
import { endCall } from './webhhookEventItems/endCallItem';
import Utils from '../../frontendUtils/frontendUtils';
import { Login } from '@microsoft/mgt-react';

const App: FunctionalComponent = () => {

    let i = 1;

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
                <Stack horizontal horizontalAlign="center">
                    <Stack.Item>
                        <ul>
                            {actualWebhookData.map( item => (
                                <>
                                    <li key={item.ScenarioId + '_' + ++i}>
                                        { item.EventName == 'NewQueueCall' ? newQueueCall(item) : null }
                                        { item.EventName == 'AbandonedCall' ? abandonedCall(item) : null }
                                        { item.EventName == 'EndCall' ? endCall(item) : null }
                                    </li>
                                </>
                            ) )}
                        </ul>
                    </Stack.Item>
                </Stack> 
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