import { h } from "preact";
import { endCall } from "./webhookEventItemTypes";
import Utils from "../../../frontendUtils/frontendUtils";

function endCallComponent( props: endCall ) {
    return (
        <div>
            <h3>Call Ended</h3>
            <p>Scenario ID - {props.ScenarioId}</p>
            <p>Event - {props.EventName}</p>
            <p>Queue - {props.QueueDisplayName}</p>
            {Utils.isPstn(props) ? <p>Caller Name - {props.RemotePartyName}</p> : <p>Caller Name - {props.RemotePartyUri}</p>}
            {Utils.isPstn(props) ? <p>Caller Number/SIP Addr. - {props.RemotePartyNumber}</p> : <p>Caller Number/SIP Addr. - {props.RemotePartyId}</p>}
            <p>Call Start Date/Time - {props.CallStartDateTime}</p>
            <p>Call End Date/Time - {props.CallEndDateTime}</p>
            <p>Call Length - {props.CallLength}</p>
            <p>Talk Time - {props.TalkTime}</p>
            <p>Wait Time - {props.WaitTime}</p>
            <p>Callback Requested? - {props.CallbackRequested == true ? 'true' : 'false'}</p>
            <p>Timed out? - {props.TimedOut == true ? 'true' : 'false'}</p>
            <p>Abandoned? - {props.Abandoned == true ? 'true' : 'false'}</p>
            <p>Service Level Achieved? - {props.ServiceLevelAchieved == true ? 'true' : 'false'}</p>
        </div>
    );
}

export { endCallComponent };