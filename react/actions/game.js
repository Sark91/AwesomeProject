// @flow

import {
  SET_USER_NAME,
  INCREMENT_CASH,
} from 'AwesomeProject/react/actions/actionTypes';

const setUserName = (name: string): Object => ({
  type: SET_USER_NAME,
  payload: { name },
});

const incrementCash = (cash: Number): Object => ({
  type: INCREMENT_CASH,
  payload: { cash },
});

export {
  setUserName,
  incrementCash,
}
