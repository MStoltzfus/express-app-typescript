import { h } from "preact";
import { abandonedPstnCall, abandonedSipCall } from "./webhookEventItemTypes";

function abandonedCall( props:any ): h.JSX.Element {

    let data = JSON.stringify(props);

    if (data.includes("RemotePartyNumber")) {
        return abandonedPstnCallItem(props);
    } else if (data.includes("RemotePartyUri")) {
        return abandonedSipCallItem(props);
    } else {
        return <div>Unknown event type</div>;
    }
}

function abandonedPstnCallItem( props: abandonedPstnCall ) {
    return (
        <div>
            <p>{props.ScenarioId}</p>
            <p>{props.EventName}</p>
            <p>{props.QueueDisplayName}</p>
            <p>{props.RemotePartyName}</p>
            <p>{props.RemotePartyNumber}</p>
            <p>{props.CallStartDateTime}</p>
            <p>{props.CallEndDateTime}</p>
            <p>{props.CallLength}</p>
            <p>{props.CallbackRequested}</p>
        </div>
    );
}

function abandonedSipCallItem( props: abandonedSipCall ) {
    return (
        <div>
            <p>{props.ScenarioId}</p>
            <p>{props.EventName}</p>
            <p>{props.QueueDisplayName}</p>
            <p>{props.RemotePartyUri}</p>
            <p>{props.RemotePartyId}</p>
            <p>{props.CallStartDateTime}</p>
            <p>{props.CallEndDateTime}</p>
            <p>{props.CallLength}</p>
            <p>{props.CallbackRequested}</p>
        </div>
    );
}

export { abandonedCall };