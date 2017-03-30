import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'components/pages/App';

class Root extends Component {

  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
          <Router>
            <div>
              <App />
            </div>
          </Router>
      </Provider>
    );
  }
}

export default Root;
