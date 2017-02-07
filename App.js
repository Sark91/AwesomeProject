import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Router, browserHistory, createMemoryHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import styles from 'AwesomeProject/react/styles/App';
import store from 'AwesomeProject/react/reducers';
import routes from 'AwesomeProject/react/routes';

window.__IS_BROWSER__ = !((!window.navigator) || (window.navigator.product === 'ReactNative'));

const history = window.__IS_BROWSER__
  ? browserHistory
  : createMemoryHistory('/');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Router history={syncHistoryWithStore(history, store)}>
            {routes(store)}
          </Router>
        </Provider>
      </View>
    );
  }
}