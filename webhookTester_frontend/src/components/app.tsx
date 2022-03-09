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
            <Stack horizontal>
                <div id="preact_root">
                    <Stack.Item>
                        <ul style={{listStyle: 'none' }}>
                            {actualWebhookData.map( item => (
                                <Fragment>
                                    <li key={item.ScenarioId + '_' + ++i}>
                                        <div style={{outline: '1px solid #ccc', padding: '10px', margin: '10px'}}>
                                        {item.EventName == 'NewQueueCall' ? newQueueCall( item ) : null}
                                        {item.EventName == 'AbandonedCall' ? abandonedCall( item ) : null}
                                        {item.EventName == 'EndCall' ? endCall( item ) : null}
                                        </div>
                                    </li>
                                </Fragment>
                            ) )}
                        </ul>
                    </Stack.Item>
                </div>
            </Stack>
        </div>
    );
};

export default App;