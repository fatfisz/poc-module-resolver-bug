import React from 'react';
import { render } from 'react-dom';
import { configureStore } from './store';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';

const initialState = {};
const store = configureStore(initialState);

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('root')
);

if(module.hot){
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <NextRoot store={store} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
