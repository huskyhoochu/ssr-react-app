import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';

import App from './App';
import { addGreeting } from './redux/actions/greeting';
import { configureStore } from './redux/store';

export default (req: any) => {
  const store = configureStore();
  store.dispatch(addGreeting('Hello from server!'));

  const routerContext = {};

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter
        location={req.baseUrl}
        context={routerContext}
      >
        <App />
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();
  const preloadedState = JSON.stringify(store.getState());

  return {
    helmet,
    html,
    preloadedState,
  };
}
