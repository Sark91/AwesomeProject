import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  Game: {
    // backgroundColor: 'red',
  },
  Game_TopBar: {
    justifyContent: 'space-between',
    borderColor: 'red',
    flexDirection:'row',
    flexWrap:'wrap',
    borderWidth: 1,
    height: 24,
  },
  Game_TopBar_UserName: {
    borderColor: 'green',
    borderWidth: 1,
  },
  Game_TopBar_Cash: {
    borderColor: 'blue',
    borderWidth: 1,
  }
});