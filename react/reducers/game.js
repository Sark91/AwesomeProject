// @flow
import {
  SET_USER_NAME,
  INCREMENT_CASH,
} from 'AwesomeProject/react/actions/actionTypes';

const initialState = {
  userName: '',
  cash: 2000,
  cashFormatted: '2000.00',
};

export default function (state: Object = initialState, action: Object = {}): Object {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.payload.name
      };

    case INCREMENT_CASH: {
      const newCash = state.cash + action.payload.cash;
      return {
        ...state,
        cash: newCash,
        cashFormatted: newCash.toFixed(2),
      };
    }

    default:
      return state;
  }
}