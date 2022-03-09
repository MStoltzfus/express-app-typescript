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
            <h3>PSTN Call Ended</h3>
            <p>Scenario ID - {props.ScenarioId}</p>
            <p>Event - {props.EventName}</p>
            <p>Queue - {props.QueueDisplayName}</p>
            <p>Caller Name - {props.RemotePartyName}</p>
            <p>Caller Number - {props.RemotePartyNumber}</p>
            <p>Call Start Date/Time - {props.CallStartDateTime}</p>
            <p>Call End Date/Time - {props.CallEndDateTime}</p>
            <p>Call Length - {props.CallLength}</p>
            <p>Talk Time - {props.TalkTime}</p>
            <p>Wait Time - {props.WaitTime}</p>
            <p>Callback Requested? - {props.CallbackRequested == true ? 'true' : 'false'}</p>
            <p>Timed out? - {props.Timeout == true ? 'true' : 'false'}</p>
            <p>Abandoned? - {props.Abandoned == true ? 'true' : 'false'}</p>
            <p>Service Level Achieved? - {props.ServiceLevelAchieved == true ? 'true' : 'false'}</p>
        </div>
    );
}

function endSipCallItem( props: endSipCall ) {
    return (
        <div>
            <h3>SIP Call Ended</h3><p>Scenario ID - {props.ScenarioId}</p>
            <p>Event - {props.EventName}</p>
            <p>Queue - {props.QueueDisplayName}</p>
            <p>Caller Name - {props.RemotePartyUri}</p>
            <p>Caller Number - {props.RemotePartyId}</p>
            <p>Call Start Date/Time - {props.CallStartDateTime}</p>
            <p>Call End Date/Time - {props.CallEndDateTime}</p>
            <p>Call Length - {props.CallLength}</p>
            <p>Talk Time - {props.TalkTime}</p>
            <p>Wait Time - {props.WaitTime}</p>
            <p>Callback Requested? - {props.CallbackRequested == true ? 'true' : 'false'}</p>
            <p>Timed out? - {props.Timeout == true ? 'true' : 'false'}</p>
            <p>Abandoned? - {props.Abandoned == true ? 'true' : 'false'}</p>
            <p>Service Level Achieved? - {props.ServiceLevelAchieved == true ? 'true' : 'false'}</p>
        </div>
    );
}

export { endCall };