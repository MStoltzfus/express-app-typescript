import { h } from "preact";
import Utils from "../../../frontendUtils/frontendUtils";
import { abandonedCall } from "./webhookEventItemTypes";

function abandonedCallComponent( props: abandonedCall ) {
    return (
        <div>
            <h3>Call Abandoned</h3>
            <p>Scenario ID - {props.ScenarioId}</p>
            <p>Event - {props.EventName}</p>
            <p>Queue - {props.QueueDisplayName}</p>
            {Utils.isPstn(props) ? <p>Caller Name - {props.RemotePartyName}</p> : <p>Caller Name - {props.RemotePartyUri}</p>}
            {Utils.isPstn(props) ? <p>Caller Number/SIP Addr. - {props.RemotePartyNumber}</p> : <p>Caller Number/SIP Addr. - {props.RemotePartyId}</p>}
            <p>Call Start Date/Time - {props.CallStartDateTime}</p>
            <p>Call End Date/Time - {props.CallEndDateTime}</p>
            <p>Call Length - {props.CallLength}</p>
            <p>Callback Requested? - {props.CallbackRequested == true ? 'true' : 'false'}</p>
        </div>
    );
}

export { abandonedCallComponent };