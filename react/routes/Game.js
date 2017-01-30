import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import style from 'AwesomeProject/react/styles/routes/Game';
import CashGenerator from 'AwesomeProject/react/components/CashGenerator';

class Game extends React.Component {
  static propTypes = {
    userName: PropTypes.string.isRequired,
    cashFormatted: PropTypes.string.isRequired,
    children: PropTypes.node,
  };

  render() {
    return (
      <View style={style.Game}>
        <View style={style.Game_TopBar}>
          <Text style={style.Game_TopBar_UserName}>{this.props.userName}</Text>
          <Text style={style.Game_TopBar_Cash}>{this.props.cashFormatted}$</Text>
        </View>
        <View>
          <CashGenerator
            name="Hamster"
            cost={1000000}
            costMultiplier={1.5}
            income={1}
            incomeMultiplier={1.4}
            sleep={1000}
            sleepMultiplier={0.9}
          />
          <CashGenerator
            name="Hamster"
            cost={1}
            costMultiplier={1.5}
            income={1}
            incomeMultiplier={1.4}
            sleep={1000}
            sleepMultiplier={0.9}
          />
        </View>
      </View>
    );
  }
}

export default connect(
  state => ({
    userName: state.game.userName,
    cashFormatted: state.game.cashFormatted,
  }),
  null
)(Game);