import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { incrementCash } from 'AwesomeProject/react/actions/game';

import style, {
  CashGeneratorProgressbarInnerWidth,
} from 'AwesomeProject/react/styles/components/CashGenerator';

const CashGeneratorProgressbarInnerWidthD10 = CashGeneratorProgressbarInnerWidth / 5;

class CashGenerstor extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired,
    costMultiplier: PropTypes.number.isRequired,
    income: PropTypes.number.isRequired,
    incomeMultiplier: PropTypes.number.isRequired,
    sleep: PropTypes.number.isRequired,
    sleepMultiplier: PropTypes.number.isRequired,
    cash: PropTypes.number.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      cost: props.cost,
      income: props.income,
      sleep: props.sleep,
      sleepD10: parseInt(props.sleep / 5, 10),
      progressbarWidth: 0,
    };
  }

  componentDidMount() {
    this.isActive = true;
    this.nextTick();
  }

  componentWillUnmount() {
    this.isActive = false;
  }

  handlePress = () => {
    if (this.props.cash >= this.state.cost) {
      const sleep = this.state.sleep * this.props.sleepMultiplier;
      this.props.incrementCash(-this.state.cost);
      this.setState({
        cost: this.state.cost * this.props.costMultiplier,
        income: this.state.income * this.props.incomeMultiplier,
        sleep,
        sleepD10: parseInt(sleep / 5),
      });
    }
  };

  nextTick = () => {
    if (this.state.progressbarWidth >= CashGeneratorProgressbarInnerWidth) {
      this.props.incrementCash(this.state.income);
      this.setState({ progressbarWidth: 0 });
    }
    else {
      this.setState({
        progressbarWidth: this.state.progressbarWidth + CashGeneratorProgressbarInnerWidthD10
      });
    }

    if (this.isActive) {
      setTimeout(this.nextTick, this.state.sleepD10);
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.handlePress}>
        <View style={style.CashGenerator}>
          <Text>{this.props.name}</Text>
          <Text>Inc: {this.state.income.toFixed(2)}$</Text>
          <Text>Cost: {this.state.cost.toFixed(2)}$</Text>
          <Text>time: {this.state.sleep.toFixed(0)}</Text>
          <View style={style.CashGenerator__Progressbar}>
            <View style={[
              style.CashGenerator_Progressbar_Inner,
              { width: this.state.progressbarWidth },
            ]} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(
  state => ({
    cash: state.game.cash,
  }),
  { incrementCash }
)(CashGenerstor);