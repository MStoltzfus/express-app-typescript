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
            <p>{props.ScenarioId}</p>
            <p>{props.EventName}</p>
            <p>{props.QueueDisplayName}</p>
            <p>{props.RemotePartyName}</p>
            <p>{props.RemotePartyNumber}</p>
            <p>{props.CallStartDateTime}</p>
            <p>{props.CallsInQueue}</p>
            <p>{props.NumberOfAvailableAgents}</p>
        </div>
    );
}

function newSipQueueCallItem( props: newSipQueueCall ): h.JSX.Element {
    return (
        <div>
            <p>{props.ScenarioId}</p>
            <p>{props.EventName}</p>
            <p>{props.QueueDisplayName}</p>
            <p>{props.RemotePartyUri}</p>
            <p>{props.RemotePartyId}</p>
            <p>{props.CallStartDateTime}</p>
            <p>{props.CallsInQueue}</p>
            <p>{props.NumberOfAvailableAgents}</p>
        </div>
    );
}

export { newQueueCall };