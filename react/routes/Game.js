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
            cost={1}
            costMultiplier={1.001}
            income={1}
            incomeMultiplier={1.001}
            sleep={1000}
            sleepMultiplier={0.99}
            level={1}
          />
          <CashGenerator
            name="Hamster"
            cost={1}
            costMultiplier={1.6}
            income={1}
            incomeMultiplier={1.2}
            sleep={1500}
            sleepMultiplier={0.9}
            level={0}
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