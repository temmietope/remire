export type Result = {
  name: string
  title: string
  url: string
  [x: string]: string | string[]
}

export type Resource = {
  count?: number
  next?: string
  previous?: string
  results: Result[]
}

export type Root = {
  films: string
  people: string
  planets: string
  species: string
  starships: string
  vehicles: string
}

export type Payload = Root | Resource | Result | Error

export type Action = {
  type: string
  payload?: Payload
}

export interface IDispatch {
  (arg: Action): Promise<Action>
}

export type RootKeys = keyof Root

export interface Istate {
  roots: {
    payload: Root
    isLoading: boolean
    error: Error
  }
  resources: {
    payload: Result[]
    isLoading: boolean
    error: Error
  }
  resource: {
    payload: Result
    isLoading: boolean
    error: Error
  }
}

export interface IReducer {
  type?: string
  payload?: Payload
  error?: Payload
  isLoading?: boolean
}
