import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// immutable.js
// import { routerMiddleware } from 'connected-react-router/immutable';
// immer
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';
import reducers from '../reducers';
import { API } from '@utils';

export const history = createBrowserHistory();

const store = createStore(
  reducers(history),
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), thunk.withExtraArgument(API), logger)
    // other store enhancers if any
  )
);

export default store;
