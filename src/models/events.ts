export type EventType = 'init' | 'transcription' | 'start-stop' | 'language'

export type EventHeaders = { headers: {
  type: EventType
}}

export type EventBody<TPayload> = { body: TPayload }

export type CommunicationEvent<TPayload> = EventHeaders & EventBody<TPayload>

export type StartStopEvent = CommunicationEvent<{isStarted: boolean}>
export type LanguageEvent = CommunicationEvent<{ language?: string } | unknown>