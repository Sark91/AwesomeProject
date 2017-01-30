import React, { PropTypes } from 'react';
import { Link } from 'react-redux';
import { Text } from 'react-native';

export default window.__IS_BROWSER__ ? Link :
class Link extends React.Component {
  static propTypes = {
    to: PropTypes.oneOf([
      PropTypes.string,
      PropTypes.func,
    ]),
    children: PropTypes.node,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  handlePress = () => {
    const { router } = this.context;
    let { to } = this.props;

    if (to instanceof Function) {
      to = to(router.location);
    }

    router.push(to)
  };

  render() {
    return (
      <Text onPress={this.handlePress}>{this.props.children}</Text>
    );
  }
};