import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text } from 'react-native';

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
        <ScrollView style={style.Game_Content}>
          {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16].map(e => (
            <CashGenerator
              name="Hamster"
              cost={100}
              costMultiplier={1.001}
              income={100}
              incomeMultiplier={1.0011}
              sleep={1000}
              sleepMultiplier={0.99}
              level={1}
              key={e}
            />
          ))}
        </ScrollView>
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