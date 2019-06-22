import { createStore } from 'redux';
import { rootReducer } from './reducer';

export function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState);
}
