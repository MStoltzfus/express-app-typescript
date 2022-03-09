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
            <h3>PSTN Call Abandoned</h3>
            <p>Scenario ID - {props.ScenarioId}</p>
            <p>Event - {props.EventName}</p>
            <p>Queue - {props.QueueDisplayName}</p>
            <p>Caller Name - {props.RemotePartyName}</p>
            <p>Caller Number - {props.RemotePartyNumber}</p>
            <p>Call Start Date/Time - {props.CallStartDateTime}</p>
            <p>Call End Date/Time - {props.CallEndDateTime}</p>
            <p>Call Length - {props.CallLength}</p>
            <p>Callback Requested? - {props.CallbackRequested == true ? 'true' : 'false'}</p>
        </div>
    );
}

function abandonedSipCallItem( props: abandonedSipCall ) {
    return (
        <div>
        <h3>SIP Call Abandoned</h3>
        <p>Scenario ID - {props.ScenarioId}</p>
        <p>Event - {props.EventName}</p>
        <p>Queue - {props.QueueDisplayName}</p>
        <p>Caller Name - {props.RemotePartyUri}</p>
        <p>Caller Number - {props.RemotePartyId}</p>
        <p>Call Start Date/Time - {props.CallStartDateTime}</p>
        <p>Call End Date/Time - {props.CallEndDateTime}</p>
        <p>Call Length - {props.CallLength}</p>
        <p>Callback Requested? - {props.CallbackRequested == true ? 'true' : 'false'}</p>
        </div>
    );
}

export { abandonedCall };