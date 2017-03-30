import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

export function configureStore(initialState){
  const store = createStore(
    rootReducer,
    initialState
  );

  if(module.hot){
    module.hot.accept('./rootReducer', () =>
      store.replaceReducer(require('./rootReducer').default)
    );
  }

  return store;
}
