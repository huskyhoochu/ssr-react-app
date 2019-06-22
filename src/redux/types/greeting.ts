export const ADD_GREETING = 'ADD_GREETING';

export interface Greeting {
  greeting: string;
}

export interface AddGreetingAction {
  payload: Greeting;
  type: typeof ADD_GREETING;
}

export type GreetingActionTypes = AddGreetingAction;
