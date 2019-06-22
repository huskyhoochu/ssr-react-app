import { ADD_GREETING, GreetingActionTypes, Greeting } from '../types/greeting';

const initialState: Greeting = {
  greeting: 'Hello from client!',
}

export function greetingReducer(
  state = initialState,
  action: GreetingActionTypes): Greeting {
    switch (action.type) {
      case ADD_GREETING:
        return {
          greeting: action.payload.greeting,
        };
      default:
        return state;
    }
}
