import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import clientMiddleware from './middlewares/clientMiddleware';
import * as reducers from './modules';
import api from '../api';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const rootReducer = combineReducers({
  ...reducers,
});

const configureStore = (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk, clientMiddleware(api)))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../redux/modules', () => {
      const nextReducers = require('./modules'); // eslint-disable-line
      const reducer = combineReducers({ ...nextReducers });
      store.replaceReducer(reducer);
    });
  }
  return store;
};

export default configureStore;
