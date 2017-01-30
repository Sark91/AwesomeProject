import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native';

import style from 'AwesomeProject/react/styles/routes/Home';
import {
  setUserName
} from 'AwesomeProject/react/actions/game';

class Home extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      userName: 'Jaboks',
    };
  }

  handlePressStartButton = () => {
    this.props.setUserName(this.state.userName);
    this.context.router.push('/game');
  };
  

  render() {
    return (
      <View style={style.Home}>
        <Text>
          Type your name:
        </Text>
        <TextInput
          onChangeText={(userName) => this.setState({ userName })}
          autoCorrect={false}
          style={style.Home_TextInput}
          value={this.state.userName}
        />
        <Button
          title="Okay"
          onPress={this.handlePressStartButton}
        />
      </View>
    );
  }
};

export default connect(
  null,
  { setUserName }
)(Home);
