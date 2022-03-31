import { h } from "preact";
import Utils from "../../../frontendUtils/frontendUtils";
import { newQueueCall } from "./webhookEventItemTypes";

function newQueueCallComponent( props: newQueueCall ): h.JSX.Element {
    return (
        <div>
            <h3>New Queue Call</h3>
            <p>Scenario ID - {props.ScenarioId}</p>
            <p>Event - {props.EventName}</p>
            <p>Queue - {props.QueueDisplayName}</p>
            {Utils.isPstn(props) ? <p>Caller Name - {props.RemotePartyName}</p> : <p>Caller Name - {props.RemotePartyUri}</p>}
            {Utils.isPstn(props) ? <p>Caller Number/SIP Addr. - {props.RemotePartyNumber}</p> : <p>Caller Number/SIP Addr. - {props.RemotePartyId}</p>}
            <p>Call Start Date/Time - {props.CallStartDateTime}</p>
            <p>Calls in Queue - {props.CallsInQueue}</p>
            <p>Available Agents - {props.NumberOfAvailableAgents}</p>
        </div>
    );
}

export { newQueueCallComponent };