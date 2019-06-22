import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';

import App from './App';
import { addGreeting } from './redux/actions/greeting';
import { configureStore } from './redux/store';

const store = configureStore();
store.dispatch(addGreeting('Hello from server!'));

const html = ReactDOMServer.renderToString(
  <Provider store={store}>
    <App />
  </Provider>
);

const preloadedState = JSON.stringify(store.getState());

export default {
  html,
  preloadedState,
};
