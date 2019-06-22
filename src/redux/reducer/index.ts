import { combineReducers } from 'redux';
import { greetingReducer } from './greeting';

export const rootReducer = combineReducers({
  greeting: greetingReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
