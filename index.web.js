import React from 'react';
import { AppRegistry } from 'react-native';
import App from 'AwesomeProject/App';

export default class AwesomeProject extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
AppRegistry.runApplication('AwesomeProject', { rootTag: document.getElementById('app') });
