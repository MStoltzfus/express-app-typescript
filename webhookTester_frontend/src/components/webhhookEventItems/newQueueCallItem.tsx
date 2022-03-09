import { h } from "preact";
import { newPstnQueueCall, newSipQueueCall } from "./webhookEventItemTypes";

function newQueueCall( props:any ): h.JSX.Element {
    let data = JSON.stringify(props);
    if (data.includes("RemotePartyNumber")) {
        return newPstnQueueCallItem(props);
    } else if (data.includes("RemotePartyUri")) {
        return newSipQueueCallItem(props);
    } else {
        return <div>Unknown event type</div>;
    }
}

function newPstnQueueCallItem( props: newPstnQueueCall ): h.JSX.Element {
    return (
        <div>
            <h3>New PSTN Queue Call</h3>
            <p>Scenario ID - {props.ScenarioId}</p>
            <p>Event - {props.EventName}</p>
            <p>Queue - {props.QueueDisplayName}</p>
            <p>Caller Name - {props.RemotePartyName}</p>
            <p>Caller Number - {props.RemotePartyNumber}</p>
            <p>Call Start Date/Time - {props.CallStartDateTime}</p>
            <p>Calls in Queue - {props.CallsInQueue}</p>
            <p>Available Agents - {props.NumberOfAvailableAgents}</p>
        </div>
    );
}

function newSipQueueCallItem( props: newSipQueueCall ): h.JSX.Element {
    return (
        <div>
            <h3>New SIP Queue Call</h3>
            <p>Scenario ID - {props.ScenarioId}</p>
            <p>Event - {props.EventName}</p>
            <p>Queue - {props.QueueDisplayName}</p>
            <p>Caller URI - {props.RemotePartyUri}</p>
            <p>Caller Id - {props.RemotePartyId}</p>
            <p>Call Start Date/Time - {props.CallStartDateTime}</p>
            <p>Calls in Queue - {props.CallsInQueue}</p>
            <p>Available Agents - {props.NumberOfAvailableAgents}</p>
        </div>
    );
}

export { newQueueCall };