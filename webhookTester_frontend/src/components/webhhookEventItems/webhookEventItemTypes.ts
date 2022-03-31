type newQueueCall = {
    ScenarioId: string;
    EventName: string;
    QueueDisplayName: string;
    CallStartDateTime: string;
    RemotePartyName?: string;
    RemotePartyNumber?: string;
    RemotePartyUri?: string;
    RemotePartyId?: string;
    CallsInQueue?: number;
    NumberOfAvailableAgents?: number;
}

type abandonedCall = {
    ScenarioId: string;
    EventName: string;
    QueueDisplayName: string;
    RemotePartyName?: string;
    RemotePartyNumber?: string;
    RemotePartyUri?: string;
    RemotePartyId?: string;
    CallStartDateTime?: string;
    CallEndDateTime?: string;
    CallLength?: string;
    CallbackRequested?: boolean;
}

type endCall = {
    ScenarioId: string;
    EventName: string;
    QueueDisplayName: string;
    RemotePartyName?: string;
    RemotePartyNumber?: string;
    RemotePartyUri?: string;
    RemotePartyId?: string;
    CallStartDateTime?: string;
    CallEndDateTime?: string;
    CallLength?: string;
    TalkTime?: string;
    WaitTime?: string;
    CallbackRequested?: boolean;
    TimedOut?: boolean;
    Abandoned?: boolean;
    ServiceLevelAchieved?: boolean;
}

export { newQueueCall, abandonedCall, endCall };