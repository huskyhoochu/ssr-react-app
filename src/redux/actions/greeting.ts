import { ADD_GREETING, AddGreetingAction, Greeting } from '../types/greeting';

export function addGreeting(greeting: Greeting['greeting']): AddGreetingAction {
  return {
    payload: {
      greeting,
    },
    type: ADD_GREETING,
  };
}
