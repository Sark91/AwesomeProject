import { StyleSheet } from 'react-native';
import {
  appPadding,
  width,
} from 'AwesomeProject/react/styles/variables';

export const CashGeneratorWidth = width / 2 - 2 * appPadding;
export const CashGeneratorProgressbarInnerWidth = CashGeneratorWidth - 2 * appPadding;

export default StyleSheet.create({
  CashGenerator: {
    backgroundColor: 'yellow',
    borderColor: 'black',
    borderWidth: 1,
    width: CashGeneratorWidth,
    height: 100,
    padding: appPadding,
    margin: appPadding / 2,
  },

  CashGenerator__Progressbar: {
    borderColor: 'black',
    borderWidth: 1,
    height: 10,
  },

  CashGenerator_Progressbar_Inner: {
    backgroundColor: 'blue',
    height: 8,
  }
});