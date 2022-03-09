interface newPstnQueueCall {
    ScenarioId: string;
    EventName: string;
    QueueDisplayName: string;
    CallStartDateTime: string;
    RemotePartyName: string;
    RemotePartyNumber: string;
    CallsInQueue: number;
    NumberOfAvailableAgents: number;
}

interface newSipQueueCall {
    ScenarioId: string;
    EventName: string;
    QueueDisplayName: string;
    RemotePartyUri: string;
    RemotePartyId: string;
    CallStartDateTime: string;
    CallsInQueue: number;
    NumberOfAvailableAgents: number;
}

interface abandonedPstnCall {
    ScenarioId: string;
    EventName: string;
    QueueDisplayName: string;
    RemotePartyName: string;
    RemotePartyNumber: string;
    CallStartDateTime: string;
    CallEndDateTime: string;
    CallLength: string;
    CallbackRequested: boolean;
}

interface abandonedSipCall {
    ScenarioId: string;
    EventName: string;
    QueueDisplayName: string;
    RemotePartyUri: string;
    RemotePartyId: string;
    CallStartDateTime: string;
    CallEndDateTime: string;
    CallLength: string;
    CallbackRequested: boolean;
}

interface endPstnCall {
    ScenarioId: string;
    EventName: string;
    QueueDisplayName: string;
    RemotePartyName: string;
    RemotePartyNumber: string;
    CallStartDateTime: string;
    CallEndDateTime: string;
    CallLength: string;
    TalkTime: string;
    WaitTime: string;
    CallbackRequested: boolean;
    Timeout: boolean;
    Abandoned: boolean;
    ServiceLevelAchieved: boolean;
}

interface endSipCall {
    ScenarioId: string;
    EventName: string;
    QueueDisplayName: string;
    RemotePartyUri: string;
    RemotePartyId: string;
    CallStartDateTime: string;
    CallEndDateTime: string;
    CallLength: string;
    TalkTime: string;
    WaitTime: string;
    CallbackRequested: boolean;
    Timeout: boolean;
    Abandoned: boolean;
    ServiceLevelAchieved: boolean;
}

export { newPstnQueueCall, newSipQueueCall, abandonedPstnCall, abandonedSipCall, endPstnCall, endSipCall };