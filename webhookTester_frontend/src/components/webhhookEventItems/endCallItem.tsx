import { h } from "preact";
import { endPstnCall, endSipCall } from "./webhookEventItemTypes";

function endCall( props:any ): h.JSX.Element {

    let data = JSON.stringify(props);

    if (data.includes("RemotePartyNumber")) {
        return endPstnCallItem(props);
    } else if (data.includes("RemotePartyUri")) {
        return endSipCallItem(props);
    } else {
        return <div>Unknown event type</div>;
    }
}

function endPstnCallItem( props: endPstnCall ) {
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
            <p>{props.TalkTime}</p>
            <p>{props.WaitTime}</p>
            <p>{props.CallbackRequested}</p>
            <p>{props.Timeout}</p>
            <p>{props.Abandoned}</p>
            <p>{props.ServiceLevelAchieved}</p>
        </div>
    );
}

function endSipCallItem( props: endSipCall ) {
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
            <p>{props.TalkTime}</p>
            <p>{props.WaitTime}</p>
            <p>{props.CallbackRequested}</p>
            <p>{props.Timeout}</p>
            <p>{props.Abandoned}</p>
            <p>{props.ServiceLevelAchieved}</p>
        </div>
    );
}

export { endCall };