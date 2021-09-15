export type EventType = 'init' | 'transcription' | 'start-record' | 'stop-record'

export type EventHeaders = { headers: {
  type: EventType
}}

export type EventBody<TPayload> = { body: TPayload }

export type CommunicationEvent<TPayload> = EventHeaders & EventBody<TPayload>